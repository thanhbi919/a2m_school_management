package com.a2m.repository.classsubject;

import org.springframework.data.jpa.repository.JpaRepository;

import com.a2m.domain.ClassSubject;

public interface ClassSubjectRepository extends JpaRepository<ClassSubject, Long>,CustomClassSubjectRepository{

}
