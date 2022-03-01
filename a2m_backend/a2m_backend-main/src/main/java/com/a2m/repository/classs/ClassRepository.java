package com.a2m.repository.classs;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.a2m.domain.Classs;

@Repository
public interface ClassRepository extends JpaRepository<Classs, Long> ,CustomClassRepository{
	List<Classs> findByClassName(String className);
}
