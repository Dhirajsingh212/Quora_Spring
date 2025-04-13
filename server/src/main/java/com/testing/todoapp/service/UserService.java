package com.testing.todoapp.service;

import com.testing.todoapp.model.User;

public interface UserService {
    public String createNewUser(User user);
    public String validateUser(User user);
    public User getUserByUsername(String username);
}
