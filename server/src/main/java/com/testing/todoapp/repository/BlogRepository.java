package com.testing.todoapp.repository;

import com.testing.todoapp.model.Blog;
import com.testing.todoapp.model.User;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BlogRepository extends JpaRepository<Blog,String> {
    public List<Blog> findByUser(User usr, Pageable pageable);
}
