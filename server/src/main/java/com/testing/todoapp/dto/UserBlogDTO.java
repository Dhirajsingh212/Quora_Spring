package com.testing.todoapp.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserBlogDTO {
    private String id;
    private String title;
    private String content;
    private LocalDateTime createdAt;
    private UserDTO user;
}
