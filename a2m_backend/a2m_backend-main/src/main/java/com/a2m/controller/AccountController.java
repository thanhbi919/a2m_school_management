package com.a2m.controller;
import com.a2m.domain.Teacher;
import com.a2m.dto.UserDto;
import com.a2m.service.account.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(value = "api/account")
@CrossOrigin(origins = "*")
public class AccountController {
    @Autowired
    AccountService accountService;

    @GetMapping
    public ResponseEntity<?> getAccount(@RequestParam Long id){
        return accountService.findAccountById(id);
    }

    @GetMapping("/findUsername")
    public List<String> findUsername(){
        return accountService.findUsername();
    }
    @GetMapping("/list-users")
    public ResponseEntity<?> getAllAccount(
            @RequestParam(name ="page",required = false,defaultValue = "0")Integer page,
            @RequestParam(name ="size", required = false,defaultValue = "5") Integer size,
            @RequestParam(name ="sort", required = false, defaultValue = "ASC") String sort){
        Sort sortable = null;
        if (sort.equals("ASC")) {
            sortable = Sort.by("id").ascending();
        }
        if (sort.equals("DESC")) {
            sortable = Sort.by("id").descending();
        }
        Pageable pageable = PageRequest.of(page,size,sortable);

        return accountService.getAllUser(pageable);
    }
    @GetMapping("/findUser")
    public ResponseEntity<?> findAccountbyUsernameAndRole(
            @RequestParam(name ="page",required = false,defaultValue = "0")Integer page,
            @RequestParam(name ="size", required = false,defaultValue = "5") Integer size,
            @RequestParam(name ="sort", required = false, defaultValue = "ASC") String sort,
            @RequestParam(name = "username" ,required = false,defaultValue = "") String username ,
            @RequestParam(name = "role" ,required = false, defaultValue = "") String role
    ){
        Sort sortable = null;
        if (sort.equals("ASC")) {
            sortable = Sort.by("id").ascending();
        }
        if (sort.equals("DESC")) {
            sortable = Sort.by("id").descending();
        }
        Pageable pageable = PageRequest.of(page,size,sortable);
        return accountService.findAccountByUsernameAndRole("%"+username+"%","%"+role+"%",pageable);
    }

    @PostMapping("/createNewAccount")
    public String saveAccount(@RequestBody UserDto userDto) throws Exception {
        accountService.createAccount(userDto);
        return "ok";
    }
    @PostMapping("/updateAccount")
    public int updateAccount(@RequestBody UserDto userDto ) throws Exception{
       return accountService.updateAccount(userDto);
    }
    @PostMapping("updateListAccount")
    public int  updateListAccount(@RequestBody List<UserDto> userDtos) throws Exception{
        return accountService.updateListAccount(userDtos);
    }
    @PostMapping("deleteAccount")
    public void deleteAccount(@RequestParam Long id){
       accountService.deleteAccount(id);
    }
    @GetMapping("/roles")
    public ResponseEntity<?> getRoleById(@RequestParam Long id){
       return ResponseEntity.ok(accountService.getRoles(id));
    }
    @GetMapping("hasExistAccount")
    public  Boolean hasExistAccount(@RequestParam String username){
        return  accountService.hasExistAccount(username);
    }

    @GetMapping("/idNotUsed")
    public ResponseEntity<List<Map<Teacher,Object>>>idNotUsed(){
        return accountService.idNotUsed();
    }
}
