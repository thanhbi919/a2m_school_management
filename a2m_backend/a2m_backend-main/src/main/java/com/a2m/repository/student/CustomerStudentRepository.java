package com.a2m.repository.student;

import java.util.List;

import com.a2m.domain.Student;
import com.a2m.domain.Teacher;

public interface CustomerStudentRepository {
	public Boolean updateStatusStu(Long stuId);
	
	public List<Student> searchStudent(String stuId, Long classId, String stuName);
	
	public List<Student> searchStudentByNameAndId(String stuId, String stuName);
	
	public List<Teacher> findTeacherBySubjectId(Long id);
		
	public List<Student> findNewStudent();
	
	public List<Teacher> findNewTeacher();
}
