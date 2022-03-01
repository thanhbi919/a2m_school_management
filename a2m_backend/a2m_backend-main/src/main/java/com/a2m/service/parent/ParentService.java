package com.a2m.service.parent;

import java.util.List;

import com.a2m.domain.Parent;

public interface ParentService {
	public List<Parent> findAll();
	public Parent findById(Long id);
	public Parent save(Parent parent);
	public List<Parent> searchParent(Long parentId, String parentName);
	public void deleteParent(Long id);
	public long totalParent();
}
