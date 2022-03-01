package com.a2m.repository.subject;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.a2m.domain.Subject;

@Repository
public interface SubjectRepository extends JpaRepository<Subject, Long>{

	@Query("select t from Subject t where LOWER(t.subjectName) like LOWER(concat('%',?1, '%'))")
	List<Subject> findBySubjectNameContaining(String subjectName);
}
