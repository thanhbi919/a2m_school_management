package com.a2m.repository.classs;

import java.util.List;

import com.a2m.domain.Classs;
import com.a2m.domain.Teacher;

public interface CustomClassRepository {
	public List<Teacher> getListTeacher();
	public List<Classs> searchClass(String classId, String className);
	
	public List<Teacher> getListTeacherBySubjectId(Long id);
}
