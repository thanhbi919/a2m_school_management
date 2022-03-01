package com.a2m.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.a2m.domain.Images;
import com.a2m.domain.Student;
import com.a2m.service.student.StudentService;
import com.a2m.service.upload.UploadFileService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value = "api/student")
public class StudentController {
	
	@Autowired
	private StudentService stuService;
	@Autowired
	private UploadFileService uploadService;
	
	@GetMapping(value = "/findAll")
	public ResponseEntity<List<Student>> findAll() throws Exception{
		return ResponseEntity.ok(stuService.findAll());
	}
	
	@GetMapping(value = "/findById/{id}")
	public ResponseEntity<?> findById(@PathVariable("id")Long stuId) throws Exception {
		return ResponseEntity.ok(stuService.findById(stuId));
	}
	
	@PostMapping(value = "/create")
	public ResponseEntity<?> save(@RequestBody Map<Object, Object> obj) throws Exception{
		
		return ResponseEntity.ok(stuService.createStudent(obj));
	}
	
	@GetMapping(value = "/updateStatus/{id}")
	public ResponseEntity<Boolean> updateStatus(@PathVariable("id")Long stuId) throws Exception{
		return ResponseEntity.ok(stuService.updateStatus(stuId));
	}
	
	@PostMapping(value = "/search")
	public ResponseEntity<?> searchStudent(@RequestBody Map<Object, Object> dataSearch){
		return ResponseEntity.ok(stuService.searchStudent(dataSearch));
	}
	
	@GetMapping(value = "/findByStuName")
	@Transactional(rollbackFor = Exception.class)
	public ResponseEntity<?> findByStuName(@RequestParam("stuName") String stuName) throws Exception{
		return ResponseEntity.ok(stuService.findByStuNameLike("%"+stuName+"%"));
	}
	
	@PutMapping(value = "update")
	public ResponseEntity<?> updateStudent(@RequestBody Student stu) throws Exception{
		return ResponseEntity.ok(stuService.save(stu));
	}
	
	@PostMapping(value = "subclass")
	public ResponseEntity<?> insertSubclass(@RequestBody Map<Object, Object> data) throws Exception{
		return ResponseEntity.ok(stuService.insertSubclassDiary(data));
	}
	
	@GetMapping(value = "findTeacherBySubjectId")
	public ResponseEntity<?> findTeacherBySubjectId(@RequestParam("subjectId") Long subjectId) throws Exception{
		return ResponseEntity.ok(stuService.findTeacherBySubjectId(subjectId));
		
	}
	
	@GetMapping("totalStudent")
	public ResponseEntity<?> totalStudent() throws Exception{
		return ResponseEntity.ok(stuService.totalStudent());
	}
	
	@GetMapping(value = "findNewStudent")
	public ResponseEntity<?> findNewStudent() throws Exception{
		return ResponseEntity.ok(stuService.findNewStudent());
	}
	
	@GetMapping(value = "findNewTeacher")
	public ResponseEntity<?> findNewTeacher() throws Exception{
		return ResponseEntity.ok(stuService.findNewTeacher());
	}
	
	@PostMapping(value = "/uploadFile")
	public ResponseEntity<?> uploadFile(@RequestParam("file") MultipartFile file,@RequestParam("stuId")Long stuId) throws Exception{
		Student s=stuService.findById(stuId).get();
		Images image = uploadService.findByStuId(stuId);
		if (image!= null) {
			int n=uploadService.deleteImageStu(stuId);
		}
		return ResponseEntity.ok(uploadService.save(file,null,s,null,stuId));
	}
	
}
