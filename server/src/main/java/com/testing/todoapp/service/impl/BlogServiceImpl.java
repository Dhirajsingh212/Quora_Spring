package com.testing.todoapp.service.impl;

import com.testing.todoapp.dto.BlogDTO;
import com.testing.todoapp.mapper.BlogMapper;
import com.testing.todoapp.model.Blog;
import com.testing.todoapp.model.User;
import com.testing.todoapp.repository.BlogRepository;
import com.testing.todoapp.service.BlogService;
import org.springframework.stereotype.Service;

import java.util.Comparator;
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
        dbBlog.sort(Comparator.comparing(Blog::getCreatedAt).reversed());
        return dbBlog.stream().map(BlogMapper::mapToBlogDTO).collect(Collectors.toList());
    }

    @Override
    public String updateBlog(String id, Blog blog) {
        Optional<Blog> dbBlog = blogRepository.findById(id);
        if(dbBlog.isPresent()) {
            if(dbBlog.get().getUser().equals(blog.getUser())) {
                Blog updatedBlog = dbBlog.get();
                updatedBlog.setTitle(blog.getTitle());
                updatedBlog.setContent(blog.getContent());
                updatedBlog.setUser(blog.getUser());
                blogRepository.save(updatedBlog);
                return "Blog updated";
            }else{
                return "Not authorized to update this blog";
            }
        }
        return "Blog not found";
    }

    @Override
    public String deleteBlog(String id,User user) {
        Optional<Blog> dbBlog = blogRepository.findById(id);
        if(dbBlog.isPresent()) {
            if(dbBlog.get().getUser().equals(user)) {
                blogRepository.delete(dbBlog.get());
                return "Blog deleted";
            }else{
                return "Not authorized to delete this blog";
            }
        }
        return "Blog not found";
    }
}
