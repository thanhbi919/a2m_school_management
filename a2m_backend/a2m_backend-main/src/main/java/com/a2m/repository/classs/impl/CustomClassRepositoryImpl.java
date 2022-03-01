package com.a2m.repository.classs.impl;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import com.a2m.domain.Classs;
import com.a2m.domain.Teacher;
import com.a2m.repository.classs.CustomClassRepository;

public class CustomClassRepositoryImpl implements CustomClassRepository{
	
	@PersistenceContext
	private EntityManager em;
	
	@Override
	public List<Teacher> getListTeacher() {
		Query query = em.createNativeQuery("SELECT * FROM teacher WHERE id not in "
				+ "(SELECT teacher_id FROM class)",Teacher.class);
		List<Teacher> list=query.getResultList();
		return list;
	}
	
	@Override
	public List<Classs> searchClass(String classId, String className) {
		Query query = em.createNativeQuery("SELECT * FROM class WHERE id like :classId AND class_name like :className",Classs.class)
				.setParameter("classId","%"+ classId+"%").setParameter("className","%"+ className+"%");
		List<Classs> list=query.getResultList();
		return list;
	}
	
	@Override
	public List<Teacher> getListTeacherBySubjectId(Long id) {
		Query query = em.createNativeQuery("SELECT * FROM teacher WHERE subject_id= :id",Teacher.class)
				.setParameter("id", id);
		List<Teacher> list=query.getResultList();
		return list;
	}

}
