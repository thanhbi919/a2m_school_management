package com.a2m.repository.account;

import com.a2m.domain.Teacher;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.a2m.domain.Account;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Map;

@Repository
public interface AccountRepository extends JpaRepository<Account, Long> {
    @Query("SELECT a.username from Account a")
    List<String> findUsername();

    @Query(value = "SELECT *  FROM account a , role r , account_role  ar WHERE a.id = account_id AND role_id = r.id AND a.username LIKE ?1 and r.name LIKE ?2" ,nativeQuery = true)
    Page<Account> findByUsernameLikeAndAndListRoleLike(String username , String role,Pageable pageable);

    @Transactional
    @Modifying
    @Query(value = "update account a,account_role ar  set a.username = ?1 , a.password = ?2, a.status = ?3,ar.role_id=?4 where a.id= ?5 and a.id = ar.account_id",nativeQuery = true)
    int update(String username, String password, Integer status,Integer roleId ,Long id);

    @Query(value = "SELECT *  FROM teacher t where  t.id " +
            "NOT IN (SELECT t.id FROM teacher t " +
            "RIGHT  JOIN account a ON t.id = a.teacher_id) " +
            "ORDER BY t.id ASC",
            nativeQuery = true)
    List<Map<Teacher,Object>> idNotUsed();
    @Query(value = "SELECT status from account  where username = ?1", nativeQuery = true)
    Boolean findStatusByUsername(String username);
    @Query(value = "SELECT t.id from account a,teacher t where a.username=?1 and a.teacher_id=t.id",nativeQuery = true)
    int findIdByUsername(String username);

    Account findByUsername(String username);
    Page<Account> findAll(Pageable pageable);
    boolean existsAccountByUsername(String username);
}
