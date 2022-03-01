package com.a2m.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.a2m.service.classsubject.ClassSubjectService;

@RestController
@RequestMapping(value = "api/student-subject")
@CrossOrigin(origins = "*")
public class ClassSubjectController {
	@Autowired
	private ClassSubjectService c;
	
	@GetMapping(value = "findSubjectByClass")
	public ResponseEntity<?> findAll(@RequestParam("stuId")Long stuId){
		return ResponseEntity.ok(c.findSubjectByClass(stuId));
	}
	
	@GetMapping(value = "checkInsertSubject")
	public ResponseEntity<?> checkInsertSubject(@RequestParam("classId")Long classId, @RequestParam("subjectId")Long subjectId) throws Exception{
		
		return ResponseEntity.ok(c.checkInsertSubject(classId, subjectId));
	}
	
	@PostMapping(value = "create")
	public ResponseEntity<?> create(@RequestBody Map<Object, Object> data) throws Exception{
		return ResponseEntity.ok(c.save(data));
	}
}
