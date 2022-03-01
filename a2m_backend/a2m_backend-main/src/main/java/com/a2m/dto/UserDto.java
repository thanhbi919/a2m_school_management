package com.a2m.dto;

import com.a2m.domain.Role;
import lombok.Data;

import java.util.List;

@Data
public class UserDto {
    private Long id;
    private String username;
    private String password;
    private Long teacherId;
    private Integer status;
    private List<Role> listRole;//Manager->role=1,Teacher->role=2
}
