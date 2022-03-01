package com.a2m.repository.teacher;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.a2m.domain.Teacher;

@Repository
public interface TeacherRepository extends JpaRepository<Teacher, Long>{
	@Query("select t from Teacher t where LOWER(t.teacherName) like LOWER(concat('%',?1, '%')) or t.telephone like %?1%")
	Page<Teacher> findByTeacherNameContainingOrTelephoneContaining(String name, Pageable pageable);
	
	@Query("SELECT e FROM Teacher e")
	Page<Teacher> findCustomers(Pageable pageable);
	
}
