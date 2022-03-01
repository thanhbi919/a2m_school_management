package com.a2m.service.parent;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.a2m.domain.Parent;
import com.a2m.repository.parent.ParentRepository;

@Service
@Transactional(rollbackFor = Exception.class)
public class ParentServiceImpl implements ParentService{
	
	@Autowired
	private ParentRepository parentRepository;
	
	@Override
	public List<Parent> findAll() {
		// TODO Auto-generated method stub
		return parentRepository.findAll();
	}

	@Override
	public Parent findById(Long id) {
		// TODO Auto-generated method stub
		return parentRepository.findById(id).get();
	}

	@Override
	public Parent save(Parent parent) {
		// TODO Auto-generated method stub
		return parentRepository.save(parent);
	}

	@Override
	public List<Parent> searchParent(Long parentId, String parentName) {
		String id="";
		if (parentId != null) {
			id=parentId+"";
		}
		return parentRepository.searchParent(id, parentName);
	}

	@Override
	public void deleteParent(Long id) {
		parentRepository.deleteParent(id);
		parentRepository.deleteById(id);	
	}

	@Override
	public long totalParent() {
		// TODO Auto-generated method stub
		return parentRepository.count();
	}

}
