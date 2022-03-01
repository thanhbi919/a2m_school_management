package com.a2m.service.classsubject;

import java.util.List;
import java.util.Map;

import com.a2m.domain.ClassSubject;

public interface ClassSubjectService {
	public List<ClassSubject> findSubjectByClass(Long stuId);
	
	public Long checkInsertSubject(Long classId, Long subjectId);
	
	public ClassSubject save(Map<Object, Object> data);
}
