package com.a2m.repository.parent.impl;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import com.a2m.domain.Parent;
import com.a2m.repository.parent.CustomParentRepository; 
public class CustomParentRepositoryImpl implements CustomParentRepository{
	
	@PersistenceContext
	private EntityManager em;
	
	@Override
	public List<Parent> searchParent(String id, String parentName) {
		Query query = em.createNativeQuery(
				"SELECT *" +
				"FROM parent p " +
				"WHERE p.id like :id and upper(p.parent_name) like upper(:parentName)",Parent.class)
				.setParameter("id","%"+id+"%")
				.setParameter("parentName","%"+ parentName+"%");
		List<Parent> list= query.getResultList();
		return list;
	}

	@Override
	public int deleteParent(Long id) {
		Query query = em.createNamedQuery("DELETE FROM student_has_parent sp WHERE sp.parent_id = :id")
				.setParameter("id", id);
		int n=query.executeUpdate();
		return n;
	}
}
