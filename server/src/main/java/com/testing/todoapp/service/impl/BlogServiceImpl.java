package com.testing.todoapp.service.impl;

import com.testing.todoapp.dto.BlogDTO;
import com.testing.todoapp.mapper.BlogMapper;
import com.testing.todoapp.model.Blog;
import com.testing.todoapp.model.User;
import com.testing.todoapp.repository.BlogRepository;
import com.testing.todoapp.service.BlogService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class BlogServiceImpl implements BlogService {
    private final BlogRepository blogRepository;

    public BlogServiceImpl(BlogRepository blogRepository) {
        this.blogRepository = blogRepository;
    }

    @Override
    public String createNewBlog(Blog blog) {
        blogRepository.save(blog);
        return "Blog created";
    }

    @Override
    public BlogDTO getBlog(String id) {
        Optional<Blog> dbBlog = blogRepository.findById(id);
        return dbBlog.map(BlogMapper::mapToBlogDTO).orElse(null);
    }

    @Override
    public List<BlogDTO> getBlogByUsername(User usr) {
        List<Blog> dbBlog = blogRepository.findByUser(usr);
        return dbBlog.stream().map(BlogMapper::mapToBlogDTO).collect(Collectors.toList());
    }

    @Override
    public String updateBlog(String id, Blog blog) {
        Optional<Blog> dbBlog = blogRepository.findById(id);
        if(dbBlog.isPresent()) {
            Blog updatedBlog = dbBlog.get();
            updatedBlog.setTitle(blog.getTitle());
            updatedBlog.setContent(blog.getContent());
            blogRepository.save(updatedBlog);
            return "Blog updated";
        }
        return "Blog not found";
    }

    @Override
    public String deleteBlog(String id) {
        Optional<Blog> dbBlog = blogRepository.findById(id);
        if(dbBlog.isPresent()) {
            blogRepository.delete(dbBlog.get());
            return "Blog deleted";
        }
        return "Blog not found";
    }
}
