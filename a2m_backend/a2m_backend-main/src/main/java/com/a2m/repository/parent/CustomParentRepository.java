package com.a2m.repository.parent;

import java.util.List;

import com.a2m.domain.Parent;

public interface CustomParentRepository {
	public List<Parent> searchParent(String id, String parentName);
	public int deleteParent(Long id);
}
