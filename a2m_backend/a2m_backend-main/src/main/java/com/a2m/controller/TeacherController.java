package com.a2m.controller;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;

import com.a2m.service.account.AccountService;
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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.a2m.domain.Teacher;
import com.a2m.service.teacher.TeacherService;
import com.a2m.service.upload.UploadFileService;

@RestController
@RequestMapping(value = "api/teacher")
@CrossOrigin(origins = "*")
public class TeacherController {

	@Autowired
	private TeacherService teacherService;

	@Autowired
	private AccountService accountService;
  @Autowired
	private UploadFileService uploadService;
  
	@GetMapping("findId")
	public int findIdByUsername(@RequestParam String username){
		return accountService.findIdByUsername(username);
	}
  
	@GetMapping("/list-teachers")
    public ResponseEntity<?> getAllTeacher(@RequestParam HashMap<String, String> params){

        return ResponseEntity.ok(teacherService.getAllTeacher(params));
    }
	
	//create and update
	@PostMapping(value = "/create")
	public ResponseEntity<?> createTeacher(@Validated @RequestBody Teacher teacher) {
		System.out.println(teacher.getId());
		teacherService.saveOrUpdate(teacher);
		return ResponseEntity.ok(teacher);
	}
	
	@PostMapping(value = "/uploadFile")
	public ResponseEntity<?> uploadFile(@RequestParam("file") MultipartFile file,@RequestParam("teacherId")Long teacherId) throws Exception{
		Optional<Teacher> t=teacherService.findTeacherById(teacherId);
		return ResponseEntity.ok(uploadService.save(file,null,null,t.get(),teacherId));
	}
	
	@PostMapping(value = "/delete")
	public void deleteTeacher(@RequestParam Long id) {
		
		teacherService.deleteTeacher(id);
	}
	
	@GetMapping(value = "findAll")
	public ResponseEntity<List<Teacher>> findAll() {
		return ResponseEntity.ok(teacherService.findAll());
	}
	
	@GetMapping(value = "search")
	public ResponseEntity<?> searchByNameOrPhone(@RequestParam HashMap<String, String> params) {
		return ResponseEntity.ok(teacherService.searchByNameOrPhone(params));
	}

	@GetMapping(value ="findById")
	public ResponseEntity<Optional<Teacher>> findById(@RequestParam Long id) {
		return ResponseEntity.ok(teacherService.findTeacherById(id));
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
	@GetMapping(value = "totalTeacher")
	public ResponseEntity<Long> totalTeacher(){
		return ResponseEntity.ok(teacherService.totalTeacher());
	}
	
}
