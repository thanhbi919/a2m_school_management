package com.a2m.repository.parent;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.a2m.domain.Parent;

@Repository
public interface ParentRepository extends JpaRepository<Parent, Long>, CustomParentRepository{

}
