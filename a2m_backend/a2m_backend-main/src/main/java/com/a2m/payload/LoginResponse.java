package com.a2m.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.security.core.GrantedAuthority;

import java.util.Collection;
import java.util.List;

@Data
@AllArgsConstructor
public class LoginResponse {
    private String username;
    private String password;
    private String token;
    private List<String> roles;
}
