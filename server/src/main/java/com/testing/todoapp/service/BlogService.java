package com.testing.todoapp.service;

import com.testing.todoapp.dto.BlogDTO;
import com.testing.todoapp.model.Blog;
import com.testing.todoapp.model.User;

import java.util.List;

public interface BlogService {
    public String createNewBlog(Blog blog);
    public BlogDTO getBlog(String id);
    public List<BlogDTO> getBlogByUsername(User usr);
    public String updateBlog(String id,Blog blog);
    public String deleteBlog(String id);
}
