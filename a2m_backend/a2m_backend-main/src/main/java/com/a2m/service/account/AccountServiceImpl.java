package com.a2m.service.account;

import com.a2m.domain.Account;
import com.a2m.domain.Role;
import com.a2m.domain.Teacher;
import com.a2m.dto.UserDto;
import com.a2m.repository.account.AccountRepository;
import com.a2m.repository.role.RoleRepository;
import com.a2m.repository.teacher.TeacherRepository;
import com.a2m.validate.account.AccountValidate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class AccountServiceImpl implements AccountService{
    @Autowired
    AccountRepository accountRepository;
    @Autowired
    TeacherRepository teacherRepository;
    @Autowired
    RoleRepository roleRepository;
    @Autowired
    AccountValidate accountValidate;
    @Autowired
    PasswordEncoder passwordEncoder;

    @Override
    public ResponseEntity<?> getAllUser(Pageable pageable) {
        return ResponseEntity.ok(accountRepository.findAll(pageable));
    }

    @Override
    public ResponseEntity<?> findAccountById(Long id) {
        return ResponseEntity.ok(accountRepository.findById(id));
    }

    @Override
    public ResponseEntity<?> findAccountByUsernameAndRole(String username, String role,Pageable pageable) {
        return ResponseEntity.ok(accountRepository.findByUsernameLikeAndAndListRoleLike(username,role,pageable));
    }

    @Override
    public List<String> findUsername() {
        return accountRepository.findUsername();
    }

    @Override
    public ResponseEntity<List<Map<Teacher,Object>>> idNotUsed() {
        return ResponseEntity.ok(accountRepository.idNotUsed());
    }

    @Override
    public Boolean hasExistAccount(String username) {
        return accountRepository.existsAccountByUsername(username);
    }

    @Override
    public String createAccount(UserDto userDto) throws Exception {
        Account account = new Account();
        //valid Username
        if(accountRepository.existsAccountByUsername(userDto.getUsername())==true){
                throw new Exception("Username đã tồn tại");
        }else {
            if(accountValidate.isValidUsername(userDto.getUsername())==false){
                throw new Exception("Username không hợp lệ");
            };
        }
        account.setUsername(userDto.getUsername());
        account.setPassword(passwordEncoder.encode(userDto.getPassword()));
        account.setObjTeacher(teacherRepository.getById(userDto.getTeacherId()));
        account.setStatus(userDto.getStatus());
        account.setListRole(userDto.getListRole());
        accountRepository.save(account);
        return "ok";
    }

    @Override
    public int updateAccount(UserDto userDto) throws Exception {
        //valid Username
        if(userDto.getUsername().equalsIgnoreCase(accountRepository.findById(userDto.getId()).get().getUsername())==false)
        {
            if(accountRepository.existsAccountByUsername(userDto.getUsername())==true){
                throw new Exception("Username đã tồn tại");
            }else {
                if(accountValidate.isValidUsername(userDto.getUsername())==false){
                    throw new Exception("Username không hợp lệ");
                };
            }
        }
        Integer roleId = 0;
       if(userDto.getListRole().get(0).getName().equalsIgnoreCase("Teacher")==true){
           roleId = 2;//quyen Teacher
       }else{
        roleId =1;//quyen Manager
        }
       return accountRepository.update(userDto.getUsername(),
               passwordEncoder.encode(userDto.getPassword()),
                userDto.getStatus(),
                roleId,
                userDto.getId());

    }

    @Override
    public int updateListAccount(List<UserDto> userDtos) throws Exception {
        int sum =0;
        for(UserDto userDto: userDtos){
            if(userDto.getUsername().equalsIgnoreCase(accountRepository.findById(userDto.getId()).get().getUsername())==false)
            {
                if(accountRepository.existsAccountByUsername(userDto.getUsername())==true){
                    throw new Exception("Username đã tồn tại");
                }else {
                    if(accountValidate.isValidUsername(userDto.getUsername())==false){
                        throw new Exception("Username không hợp lệ");
                    };
                }
            }
            Integer roleId = 0;
            if(userDto.getListRole().get(0).getName().equalsIgnoreCase("Teacher")==true){
                roleId = 2;
            }else{
                roleId =1;
            }
            accountRepository.update(userDto.getUsername(),
                    userDto.getPassword(),
                    userDto.getStatus(),
                    roleId,
                    userDto.getId());
            sum++;
        }

        return sum;
    }

    @Override
    public int findIdByUsername(String username) {
        return accountRepository.findIdByUsername(username);
    }

    @Override
    public List<Role> getRoles(Long id){
       return roleRepository.getRoleById(id);
    }

    @Override
    public void deleteAccount(Long id) {
        Account account = new Account();
        account = accountRepository.getById(id);
        accountRepository.delete(account);
    }

    @Override
    public Boolean findStatusByUsername(String username) {
        if(accountRepository.existsAccountByUsername(username)){
        return accountRepository.findStatusByUsername(username);}
        else return true ;
    }


}
