package com.a2m.repository.student;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.a2m.domain.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long>, CustomerStudentRepository{
	List<Student> findByStuNameLike(String stuName);
}
