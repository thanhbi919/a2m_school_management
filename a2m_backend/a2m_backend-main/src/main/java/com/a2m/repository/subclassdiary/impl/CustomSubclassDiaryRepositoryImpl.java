package com.a2m.repository.subclassdiary.impl;

import java.math.BigInteger;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.transaction.annotation.Transactional;

import com.a2m.domain.SubclassDiary;
import com.a2m.repository.subclassdiary.CustomSubclassDiaryRepository;

public class CustomSubclassDiaryRepositoryImpl implements CustomSubclassDiaryRepository{
	
	@PersistenceContext
	private EntityManager em;
	
	@Override
	@Transactional
	public int deleteSubclassDiary(Long stuId, Long classId) {
		Query query = em.createNativeQuery(
				"DELETE FROM subclass_diary " +
				"WHERE stu_id = :stuId AND class_id= :classId ").setParameter("classId", classId)
				.setParameter("stuId",stuId);
		int n = query.executeUpdate();
		return n;
	}

	@Override
	@Transactional
	public int updateSubclassDiary(Long stuId, Long classId, String year, Boolean status) {
		Query query = em.createNativeQuery(
				"UPDATE subclass_diary set year= :year, status= :status " +
				"WHERE class_id = :classId AND stu_id= :stuId ")
				.setParameter("year", year).setParameter("status", status)
				.setParameter("classId",classId).setParameter("stuId", stuId);
		int n = query.executeUpdate();
		return n;
	}

	@Override
	public List<SubclassDiary> findByStuId(Long stuId) {
		Query query = em.createNativeQuery(
				"SELECT * FROM subclass_diary sd , class c " +
				"WHERE sd.class_id = c.id AND sd.stu_id= :stuId ",SubclassDiary.class)
				.setParameter("stuId", stuId);
		List<SubclassDiary> list = query.getResultList();
		return list;
	}

	@Override
	public SubclassDiary findByStuIdAndClassId(Long stuId, Long classId) {
		// TODO Auto-generated method stub
		Query query = em.createNativeQuery(
				"SELECT * FROM subclass_diary sd , class c " +
				"WHERE sd.class_id = c.id AND sd.stu_id= :stuId AND sd.class_id= :classId",SubclassDiary.class)
				.setParameter("stuId", stuId).setParameter("classId", classId);
		List<SubclassDiary> list =  query.getResultList();
		if (list.size()>0) {
			return list.get(0);
		}else {
			return null;
		}
		
	}

	@Override
	public int countStudentByClassId(Long classId) {
		Query query = em.createNativeQuery(
				"SELECT count(sd.stu_id) FROM subclass_diary sd , class c " +
				"WHERE sd.class_id = c.id AND c.id = :classId AND sd.status= :status")
				.setParameter("classId", classId).setParameter("status", 0);
		List n = query.getResultList();
		Integer value = ((BigInteger) n.get(0)).intValue();
		return value;
	}

}
