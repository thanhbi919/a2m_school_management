package com.a2m.service.account;

import com.a2m.domain.Role;
import com.a2m.domain.Teacher;
import com.a2m.dto.UserDto;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Map;

public interface AccountService {
    ResponseEntity<?> getAllUser(Pageable pageable);
    ResponseEntity<?> findAccountById(Long id);
    ResponseEntity<?> findAccountByUsernameAndRole(String username,String role,Pageable pageable);
    List<String> findUsername();
    ResponseEntity<List<Map<Teacher,Object>>> idNotUsed();
    Boolean hasExistAccount(String username);
    String createAccount(UserDto userDto) throws Exception;
    int updateAccount(UserDto userDto) throws Exception;
    int updateListAccount(List<UserDto> userDtos) throws Exception;
    int findIdByUsername(String username);
    List<Role> getRoles(Long id);
    void deleteAccount(Long id);
    Boolean findStatusByUsername(String username);
}
