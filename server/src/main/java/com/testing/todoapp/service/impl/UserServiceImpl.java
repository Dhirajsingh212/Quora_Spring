package com.testing.todoapp.service.impl;

import com.testing.todoapp.model.User;
import com.testing.todoapp.repository.UserRepository;
import com.testing.todoapp.service.JWTService;
import com.testing.todoapp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    private final JWTService jwtService;

    @Autowired
    AuthenticationManager authenticationManager;


    public UserServiceImpl(UserRepository userRepository, JWTService jwtService) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
    }

    @Override
    public String createNewUser(User user) {
        if(user.getRole() == null) {
            user.setRole("USER");
        }
        User dbUser = userRepository.findByUsername(user.getUsername());
        if(dbUser != null) {
            return "Failure User already exists";
        }
        try{
            userRepository.save(user);
            return jwtService.generateToken(user.getUsername());
        }catch (Exception e){
            System.out.println(e.getMessage());
            return "Failure " + e.getMessage();
        }
    }

    @Override
    public String validateUser(User user) {
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword()));
        if(authentication.isAuthenticated()){
            return jwtService.generateToken(user.getUsername());
        }
        return "Failure";
    }

    @Override
    public User getUserByUsername(String username) {
        return userRepository.findByUsername(username);
    }
}
