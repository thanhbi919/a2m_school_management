package com.a2m.repository.classsubject;

import java.util.List;

import com.a2m.domain.ClassSubject;

public interface CustomClassSubjectRepository {
	public List<ClassSubject> findSubjectByClass(Long stuId);
	public Long checkInsertSubject(Long classId, Long subjectId);
}
