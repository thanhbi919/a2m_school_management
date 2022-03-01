package com.a2m.repository.subclassdiary;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.a2m.domain.SubclassDiary;

@Repository
public interface SubclassDiaryRepository extends JpaRepository<SubclassDiary, Long>, CustomSubclassDiaryRepository{
	
}
