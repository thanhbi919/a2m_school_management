package com.a2m.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.a2m.service.subclassdiary.SubclassDiaryService;

@RestController
@RequestMapping(value = "api/subclass-diary")
@CrossOrigin(origins = "*")
public class SubclassDiaryController {
	@Autowired
	private SubclassDiaryService subclassDiaryService;
	
	@GetMapping(value = "")
	public ResponseEntity<?> findByStuId(@RequestParam("stuId")Long stuId) throws Exception{
		return ResponseEntity.ok(subclassDiaryService.findByStuId(stuId));
	}
	
	@DeleteMapping(value = "")
	public ResponseEntity<?> deleteSubclassDiary(@RequestParam("stuId") Long stuId, @RequestParam("classId") Long classId) throws Exception{
		return ResponseEntity.ok(subclassDiaryService.deleteSubclassDiary(stuId, classId));
	}
	
	@PutMapping(value = "")
	public ResponseEntity<?> updateSubclassDiary(@RequestBody Map<Object, Object> data) throws Exception{
		Long stuId= Long.valueOf(data.get("stuId")+"");
		Long classId= Long.valueOf(data.get("classId")+"");
		String year= data.get("year")+"";
		Boolean status= Boolean.parseBoolean(data.get("status")+"");
		return ResponseEntity.ok(subclassDiaryService.updateSubclassDiary(stuId, classId, year, status));
	}
	
	@GetMapping(value = "findByStuIdAndClassId")
	public ResponseEntity<?> findByStuIdAndClassId(@RequestParam("stuId") Long stuId,@RequestParam("classId") Long classId) throws Exception{
		return ResponseEntity.ok(subclassDiaryService.findByStuIdAndClassId(stuId, classId));
	}
	
	@GetMapping(value = "countStudentByClassId")
	public ResponseEntity<?> findByStuIdAndClassId(@RequestParam("classId") Long classId) throws Exception{
		return ResponseEntity.ok(subclassDiaryService.countStudentByClassId(classId));
	}
}
