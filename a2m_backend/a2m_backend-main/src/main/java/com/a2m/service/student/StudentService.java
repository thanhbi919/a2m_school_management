package com.a2m.service.student;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import com.a2m.domain.Student;
import com.a2m.domain.Teacher;

public interface StudentService {
	public List<Student> findAll();
	
	public Optional<Student> findById(Long stuId);
	
	public Student createStudent(Map<Object, Object> obj);
	
	public Boolean updateStatus(Long stuId);
	
	public List<Student> searchStudent(Map<Object, Object> data);
	
	public List<Student> findByStuNameLike(String stuName);
	
	public Student save(Student stu);
	
	public Boolean insertSubclassDiary(Map<Object, Object> data);
	
	public List<Teacher> findTeacherBySubjectId(Long id);
		
	public long totalStudent();
	
	public List<Student> findNewStudent();
	
	public List<Teacher> findNewTeacher();
}
