package com.testing.todoapp.mapper;

import com.testing.todoapp.dto.BlogDTO;
import com.testing.todoapp.model.Blog;

public class BlogMapper {
    public static BlogDTO mapToBlogDTO(Blog blog) {
        return new BlogDTO(
                blog.getId(),
                blog.getTitle(),
                blog.getContent()
        );
    }
}
