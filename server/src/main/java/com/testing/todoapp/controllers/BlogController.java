package com.testing.todoapp.controllers;

import com.testing.todoapp.dto.BlogDTO;
import com.testing.todoapp.model.Blog;
import com.testing.todoapp.model.User;
import com.testing.todoapp.service.BlogService;
import com.testing.todoapp.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/blog")
public class BlogController {
    private final BlogService blogService;
    private final UserService userService;

    public BlogController(BlogService blogService, UserService userService) {
        this.blogService = blogService;
        this.userService = userService;
    }

    @GetMapping("{id}")
    public ResponseEntity<BlogDTO> getBlogById(@PathVariable String id){
        return new ResponseEntity<>(blogService.getBlog(id), HttpStatus.OK);
    }

    @GetMapping("/user/all")
    public ResponseEntity<List<BlogDTO>> getAllBlog(@RequestParam(value = "pageSize") int pageSize,@RequestParam(value = "pageNumber") int page){
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        User dbUser = userService.getUserByUsername(username);
        if (dbUser == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(blogService.getBlogByUsername(dbUser,pageSize,page), HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<String> createBlog(@RequestBody Blog blog){
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = userService.getUserByUsername(username);
        if (user == null) {
            return new ResponseEntity<>("User  not found", HttpStatus.NOT_FOUND);
        }
        blog.setUser(user);
        return new ResponseEntity<>(blogService.createNewBlog(blog),HttpStatus.CREATED);
    }

    @PostMapping("/update/{id}")
    public ResponseEntity<String> updateBlog(@PathVariable String id, @RequestBody Blog blog){
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = userService.getUserByUsername(username);
        if (user == null) {
            return new ResponseEntity<>("User  not found", HttpStatus.NOT_FOUND);
        }
        blog.setUser(user);
        return new ResponseEntity<>(blogService.updateBlog(id,blog),HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteBlog(@PathVariable String id){
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = userService.getUserByUsername(username);
        if (user == null) {
            return new ResponseEntity<>("User  not found", HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(blogService.deleteBlog(id,user),HttpStatus.OK);
    }
}
