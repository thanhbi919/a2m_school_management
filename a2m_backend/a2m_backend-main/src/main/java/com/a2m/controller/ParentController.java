package com.a2m.controller;


import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
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
import com.a2m.domain.Parent;
import com.a2m.domain.Student;
import com.a2m.service.parent.ParentService;
import com.a2m.service.student.StudentService;
import com.a2m.service.upload.UploadFileService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(value = "api/parent")
@Transactional(rollbackFor = Exception.class)
public class ParentController {
	@Autowired
	private ParentService parentService;
	@Autowired
	private StudentService stuService;
	@Autowired
	private UploadFileService uploadService;
	
	@GetMapping(value = "findAll")
	public ResponseEntity<List<Parent>> findAll() throws Exception{
		return ResponseEntity.ok(parentService.findAll());
	}
	
	@GetMapping(value = "findById/{id}")
	public ResponseEntity<Parent> findById(@PathVariable("id")Long parentId) throws Exception{
		return ResponseEntity.ok(parentService.findById(parentId));
	}
	
	@PostMapping(value = "create")
	public ResponseEntity<?> save(@RequestBody Parent parent,@RequestParam("stuId") Long stuId) throws Exception{
		Parent p = parentService.save(parent);
		Student stu=stuService.findById(stuId).get();
		List<Student> lisStu = new ArrayList<Student>();
		lisStu.add(stu);
		p.setListStu(lisStu);
		stu.getListParent().add(p);
		return ResponseEntity.ok(p);
	}
	
	@PostMapping(value = "/uploadFile")
	public ResponseEntity<?> uploadFile(@RequestParam("file") MultipartFile file,@RequestParam("parentId")Long parentId) throws Exception{
		Parent p=parentService.findById(parentId);
		Images image = uploadService.findByParent(parentId);
		if (image != null) {
			int n =uploadService.deleteImageParent(parentId);
		}
		return ResponseEntity.ok(uploadService.save(file,p,null,null,parentId));
	}
	
	@GetMapping(value = "search")
	public ResponseEntity<?> searchParent(@RequestParam("parentId") String parentId, @RequestParam("parentName") String parentName) throws Exception{
		Long id;
		if (parentId.length()!=0) {
			id =Long.parseLong(parentId);
		}else {
			id =null;
		}
		return ResponseEntity.ok(parentService.searchParent(id, parentName));
	}
	@PutMapping(value = "update")
	public ResponseEntity<?> updateParent(@RequestBody Parent parent) throws Exception{
		return ResponseEntity.ok(parentService.save(parent));
	}
	
	@DeleteMapping(value = "delete")
	public ResponseEntity<?> deleteParent(@RequestParam("id")Long id) throws Exception{
		parentService.deleteParent(id);
		return ResponseEntity.ok(null);
	}
	
	@GetMapping(value = "totalParent")
	public ResponseEntity<?> totalParent() throws Exception{
		return ResponseEntity.ok(parentService.totalParent());
	}
	
}
