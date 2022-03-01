package com.a2m.repository.image.impl;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.Transactional;

import com.a2m.domain.Images;
import com.a2m.repository.image.CustomImageRepository;

public class CustomImageRepositoryImpl implements CustomImageRepository{
	
	@PersistenceContext
	private EntityManager em;
	
	@Override
	public int deleteByParentId(Long parentId) {
		// TODO Auto-generated method stub
		Query query = em.createNativeQuery("DELETE FROM images WHERE parent_id= :parentId")
				.setParameter("parentId", parentId);
		int n = query.executeUpdate();
		return n;
	}

	@Override
	@Transactional 
	public int deleteByStuId(Long stuId) {
		// TODO Auto-generated method stub
		Query query = em.createNativeQuery("DELETE FROM images WHERE stu_id= :stuId")
				.setParameter("stuId", stuId);
		int n = query.executeUpdate();
		return n;
	}

	@Override
	public Images findByParentId(Long id) {
		// TODO Auto-generated method stub
		Query query = em.createNativeQuery("SELECT * FROM images WHERE parent_id= :parentId",Images.class)
				.setParameter("parentId", id);
		List<Images> list=query.getResultList();
		if (list.size()!=0) {
			return list.get(0);
		}
		return null;
	}

	@Override
	public Images findByStuId(Long id) {
		// TODO Auto-generated method stub
		Query query = em.createNativeQuery("SELECT * FROM images WHERE stu_id= :stuId",Images.class)
				.setParameter("stuId", id);
		List<Images> list=query.getResultList();
		if (list.size()!=0) {
			return list.get(0);
		}
		return null;
	}

}
