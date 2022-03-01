package com.a2m.service.subject;

import java.util.List;
import java.util.Optional;

import com.a2m.domain.Subject;

public interface SubjectService {

	public List<Subject> findAll();

	public Subject findById(long id);

	public void editSubject(Subject c);

	public void addSubject(Subject c);

	// Thành
	void saveOrUpdate(Subject subject);

	void deleteSubject(Long id);

	Optional<Subject> getSubjectById(Long id);

	List<Subject> searchByName(String name);

}
