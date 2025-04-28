package com.testing.todoapp.mapper;

import com.testing.todoapp.dto.UserBlogDTO;
import com.testing.todoapp.model.Blog;

import static com.testing.todoapp.mapper.UserMapper.mapToUserDTO;

public class UserBlogMapper {
    public static UserBlogDTO mapToUserBlogDTO(Blog blog) {
        return new UserBlogDTO(
                blog.getId(),
                blog.getTitle(),
                blog.getContent(),
                blog.getCreatedAt(),
                mapToUserDTO(blog.getUser())
        );
    }
}
