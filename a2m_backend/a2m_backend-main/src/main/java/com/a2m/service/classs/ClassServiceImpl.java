package com.a2m.service.classs;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.a2m.domain.Classs;
import com.a2m.domain.Subject;
import com.a2m.domain.Teacher;
import com.a2m.dto.ClassRequest;
import com.a2m.repository.classs.ClassRepository;

@Service
public class ClassServiceImpl implements ClassService {
	@Autowired
	private ClassRepository classRepository;

	@Override
	public List<Classs> findAll() {
		return classRepository.findAll();
	}

	
	@Override
	public Classs save(Classs c) {
		return classRepository.save(c);
	}

	@Override
	public void deleteClass(Classs c) {
		classRepository.deleteById(c.getId());
	}

	@Override
	public void editClass(Classs c) {
		classRepository.save(c);
	}

	@Override
	public Classs findById(Long id) {
		return classRepository.findById(id).get();
	}

	@Override
	public List<Teacher> getListTeacher() {
		// TODO Auto-generated method stub
		return classRepository.getListTeacher();
	}

	@Override
	public List<Classs> findByClassName(String className) {
		// TODO Auto-generated method stub
		return classRepository.findByClassName(className);
	}

	@Override
	public List<Classs> searchClass(String classId, String className) {
		// TODO Auto-generated method stub
		return classRepository.searchClass(classId, className);
	}


	@Override
	public void saveOrUpdate(ClassRequest classs) {
		// TODO Auto-generated method stub
		
	}


	@Override
	public List<Teacher> getListTeacherBySubjectId(Long id) {
		// TODO Auto-generated method stub
		return classRepository.getListTeacherBySubjectId(id);
	}
	
}
