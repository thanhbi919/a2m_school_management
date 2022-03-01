package com.a2m.service.classs;

import java.util.List;

import com.a2m.domain.Classs;
import com.a2m.domain.Teacher;
import com.a2m.dto.ClassRequest;

public interface ClassService {
	public List<Classs> findAll();

	public Classs save(Classs c);

	public void deleteClass(Classs c);

	public void editClass(Classs c);
	
	public Classs findById(Long id);


	void saveOrUpdate(ClassRequest classs);

	public List<Teacher> getListTeacher();
	
	public List<Classs> findByClassName(String className);
	
	public List<Classs> searchClass(String classId, String className);

	public List<Teacher> getListTeacherBySubjectId(Long id);
	
}
