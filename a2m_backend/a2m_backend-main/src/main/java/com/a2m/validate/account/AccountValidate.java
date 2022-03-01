package com.a2m.validate.account;

import org.springframework.stereotype.Service;

public interface AccountValidate {
    boolean isValidUsername(String username);
    boolean isValidPassword(String password);
    boolean isValidRole(String role);
}
