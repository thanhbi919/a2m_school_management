package com.a2m.service.teacher;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;

import com.a2m.domain.Teacher;

public interface TeacherService {

	Teacher saveOrUpdate(Teacher teacher);

	List<Teacher> findAll();

	Optional<Teacher>  findTeacherById(Long id);

	void deleteTeacher(Long id);

	Page<Teacher> searchByNameOrPhone(HashMap<String, String> params);

	Page<Teacher> getAllTeacher(HashMap<String, String> params);
	
	Long totalTeacher();
}
