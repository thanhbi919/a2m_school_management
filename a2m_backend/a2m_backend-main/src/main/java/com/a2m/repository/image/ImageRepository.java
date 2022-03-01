package com.a2m.repository.image;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.a2m.domain.Images;

@Repository
public interface ImageRepository extends JpaRepository<Images, Long>,CustomImageRepository{
	
}
