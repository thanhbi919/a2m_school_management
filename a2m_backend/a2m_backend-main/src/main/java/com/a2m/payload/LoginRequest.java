package com.a2m.payload;

import lombok.Data;

@Data
public class LoginRequest {
    private String username;
    private String password;
    
    
    public LoginRequest(String username, String password) {
        this.username = username;
        this.password = password;
    }

	public LoginRequest() {
		super();
		// TODO Auto-generated constructor stub
	}
}
