package com.testing.todoapp.mapper;

import com.testing.todoapp.dto.UserDTO;
import com.testing.todoapp.model.User;

public class UserMapper {
    public static UserDTO mapToUserDTO(User user) {
        return new UserDTO(
                user.getId(),
                user.getUsername(),
                user.getRole()
        );
    }
}
