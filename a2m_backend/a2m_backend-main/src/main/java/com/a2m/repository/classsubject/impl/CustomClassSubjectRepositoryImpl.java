package com.a2m.repository.classsubject.impl;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import com.a2m.domain.ClassSubject;
import com.a2m.repository.classsubject.CustomClassSubjectRepository;

public class CustomClassSubjectRepositoryImpl implements CustomClassSubjectRepository{

	@PersistenceContext
	private EntityManager em;
	
	@Override
	public List<ClassSubject> findSubjectByClass(Long stuId) {
		Query query = em.createNativeQuery(
				"SELECT * FROM class_has_subject chs, subclass_diary sd, subject sub "
				+ "WHERE chs.class_id= sd.class_id AND sd.status= :status "
				+ "AND sd.stu_id= :stuId AND chs.subject_id = sub.id AND sub.status= :statusSub ",ClassSubject.class)
				.setParameter("stuId", stuId).setParameter("status", 0).setParameter("statusSub", 1);
		List<ClassSubject> list = query.getResultList();
		return list;
	}

	@Override
	public Long checkInsertSubject(Long classId, Long subjectId) {
		Query query = em.createNativeQuery(
				"SELECT * FROM class_has_subject chs "
				+ "WHERE chs.class_id= :classId AND chs.subject_id= :subjectId",ClassSubject.class)
				.setParameter("classId", classId).setParameter("subjectId", subjectId);
		List list = query.getResultList();
		return (long) list.size();
	}

}
