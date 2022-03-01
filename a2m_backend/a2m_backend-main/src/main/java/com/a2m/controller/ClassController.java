package com.a2m.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RequestParam;

import org.springframework.web.bind.annotation.RestController;

import com.a2m.domain.Classs;
import com.a2m.service.classs.ClassService;
import com.a2m.service.teacher.TeacherService;

@RestController
@RequestMapping(value = "api/class")
@CrossOrigin(origins = "*")
public class ClassController {
	
	@Autowired
	private ClassService classService;
	@Autowired 
	private TeacherService teacherService;
	
	@GetMapping(value = "/list")
	public ResponseEntity<List<Classs>> findAll() throws Exception{
		
		return ResponseEntity.ok(classService.findAll());
	}
	@PostMapping(value = "/save")
	public ResponseEntity<?> save(@RequestBody Map<Object, Object> data) throws Exception{
		Classs c = new Classs();
		c.setClassName(data.get("className")+"");
		c.setTotalStu((Integer) data.get("totalStu"));
		Long teacherId= Long.valueOf(data.get("teacherId")+"");
		c.setObjTeacher(teacherService.findTeacherById(teacherId).get());
		return ResponseEntity.ok(classService.save(c));
	}
	
	@PutMapping(value = "/update")
	public ResponseEntity<?> update(@RequestBody Map<Object, Object> data) throws Exception{
		Classs c = new Classs();
		Long id =Long.valueOf(data.get("id")+"");
		c.setId(id);
		c.setClassName((String) data.get("className"));
		c.setTotalStu((Integer) data.get("totalStu"));
		Long teacherId= Long.valueOf(data.get("teacherId")+"");
		c.setObjTeacher(teacherService.findTeacherById(teacherId).get());
		return ResponseEntity.ok(classService.save(c));
	}
	
	
	@GetMapping(value = "findById")
	public ResponseEntity<?> findById(@RequestParam("classId") Long classId) throws Exception{
		return ResponseEntity.ok(classService.findById(classId));
	}
	
	@GetMapping(value = "/listTeacher")
	public ResponseEntity<?> getListTeacher() throws Exception {
		return ResponseEntity.ok(classService.getListTeacher());
	}
	
	@GetMapping(value = "findByClassName")
	public ResponseEntity<?> findByClassName(@RequestParam("className") String className) throws Exception{
		return ResponseEntity.ok(classService.findByClassName(className));
	}
	
	@GetMapping(value = "searchClass")
	public ResponseEntity<?> searchClass(@RequestParam("classId") String classId, @RequestParam("className") String className){
		if (classId.equals("null")) {
			classId="";
		}
		return ResponseEntity.ok(classService.searchClass(classId, className));
	}
	
	@GetMapping(value = "getTeacherBySubject")
	public ResponseEntity<?> getListTeacherBySubjectId(@RequestParam("subjectId") Long id) throws Exception{
		return ResponseEntity.ok(classService.getListTeacherBySubjectId(id));
	}
	
}

