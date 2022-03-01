package com.a2m.repository.image;

import com.a2m.domain.Images;

public interface CustomImageRepository {
	public int deleteByParentId(Long parentId);
	public int deleteByStuId(Long stuId);
	public Images findByParentId(Long id);
	public Images findByStuId(Long id);
}
