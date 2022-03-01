package com.a2m.controller;

import com.a2m.jwt.JwtTokenProvider;
import com.a2m.payload.LoginRequest;
import com.a2m.payload.LoginResponse;
import com.a2m.repository.account.AccountRepository;
import com.a2m.service.account.AccountService;
import com.a2m.service.account.CustomUserDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class SecurityController {
    @Autowired
    AuthenticationManager authenticationManager  ;
    @Autowired
    AccountRepository accountRepository;
    @Autowired
    AccountService accountService;

    @Autowired
    private JwtTokenProvider tokenProvider;

    @PostMapping("/login")
    public LoginResponse authenticateUser(@RequestBody LoginRequest loginRequest) throws Exception {
        if(accountService.findStatusByUsername(loginRequest.getUsername())==false){
            LoginResponse loginResponse= new LoginResponse(loginRequest.getUsername(), loginRequest.getPassword(), "",new ArrayList<>());
            return  loginResponse;
        }else {

            // Xác thực thông tin người dùng Request lên
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            loginRequest.getUsername(),
                            loginRequest.getPassword()
                    )
            );
            List<String> roles = new ArrayList<>();
            String role = accountRepository.findByUsername(loginRequest.getUsername()).getListRole().get(0).getName();
            roles.add(role);
            // Nếu không xảy ra exception tức là thông tin hợp lệ
            // Set thông tin authentication vào Security Context
            SecurityContextHolder.getContext().setAuthentication(authentication);

            // Trả về jwt cho người dùng.
            String jwt = tokenProvider.generateToken((CustomUserDetails) authentication.getPrincipal());
            return new LoginResponse(((CustomUserDetails) authentication.getPrincipal()).getUsername(),
                    ((CustomUserDetails) authentication.getPrincipal()).getPassword(), jwt, roles);
        }
    }
}
