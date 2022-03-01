package com.a2m.repository.role;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.a2m.domain.Role;

import java.util.List;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long>{
   List<Role> getRoleById(Long role);
}
