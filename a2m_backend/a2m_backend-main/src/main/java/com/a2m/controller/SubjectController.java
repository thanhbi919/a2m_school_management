package com.a2m.controller;

import java.util.HashMap;
import java.util.List;


import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.a2m.domain.Subject;
import com.a2m.domain.Teacher;
import com.a2m.service.subject.SubjectService;
@RestController
@RequestMapping(value = "api/subject")
@CrossOrigin(origins = "*")
public class  SubjectController {
	@Autowired
	private SubjectService service;
	
	@GetMapping(value = "/list")
	public ResponseEntity<List<Subject>> findAll() throws Exception{
		return ResponseEntity.ok(service.findAll());
	}
	
	/* Đức Controller */
	@GetMapping(value = "/sub")
	public ResponseEntity<Subject> getSubjectById(HttpServletRequest request,
            HttpServletRequest response) throws Exception{
		long id = Long.parseLong(request.getParameter("id"));
		return ResponseEntity.ok(service.findById(id));
	}
	
	@PutMapping(value = "/sub")
	public String addSubject(HttpServletRequest request,
            HttpServletRequest response){
		long id = Long.parseLong(request.getParameter("id"));
		String name = request.getParameter("name");
		String status = request.getParameter("status");
		Boolean status2=Boolean.parseBoolean(status);
		Subject c = new Subject(id, name, status2);
		
		String result = "";
		try {
			service.addSubject(c);
			result = "OK";
		} catch (Exception e) {
			e.getStackTrace();
			result = "fail";
			// TODO: handle exception
		}
		return result;
	}
	
	@PostMapping(value="/sub")
	public String editSubject(Subject c) throws Exception{
		String result = "";
		try {
			service.editSubject(c);
			result = "OK";
		} catch (Exception e) {
			e.getStackTrace();
			result = "fail";
			// TODO: handle exception
		}
		return result;		
	} /* End Đức Controller -----------------------*/
	
	@PostMapping(value = "/create")
	public ResponseEntity<?> createSubject(@Validated @RequestBody Subject subject) {
		System.out.println(subject.getId());
		service.saveOrUpdate(subject);
		return ResponseEntity.ok(subject);
	}
	
	@PostMapping(value = "/delete")
	public void deleteSubject(@RequestParam Long id) {
		
		service.deleteSubject(id);
	}
	
	@GetMapping(value = "/getById")
	public ResponseEntity<?> getSubjectById(@RequestParam Long id) {
		
		return ResponseEntity.ok(service.getSubjectById(id));
	}
	
	@GetMapping(value = "/search")
	public ResponseEntity<?> searchByName(@RequestParam String name) {
		
		return ResponseEntity.ok(service.searchByName(name));
	}
	
	@ExceptionHandler(MethodArgumentNotValidException.class)
	@ResponseStatus(value = HttpStatus.BAD_REQUEST)
	public ResponseEntity<?> handleMethodArgumentNotValidException(MethodArgumentNotValidException ex) {
		List<FieldError> listEr = ex.getFieldErrors();
		HashMap<String, String> rs = new HashMap<String, String>();
		for (FieldError fieldError : listEr) {
			String name = fieldError.getField();
			String message = fieldError.getDefaultMessage();
			rs.put(name, message);
		}
		return ResponseEntity.badRequest().body(rs);
	}
}

