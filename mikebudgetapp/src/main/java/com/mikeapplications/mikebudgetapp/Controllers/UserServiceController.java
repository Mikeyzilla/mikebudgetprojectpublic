package com.mikeapplications.mikebudgetapp.Controllers;

import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mikeapplications.mikebudgetapp.Entities.LoginRequest;
import com.mikeapplications.mikebudgetapp.Entities.User;
import com.mikeapplications.mikebudgetapp.Services.UserService;

@RestController
public class UserServiceController {

    private final UserService userService;

    public UserServiceController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/users")
    public ResponseEntity<Void> createUser(@RequestBody User user) {
        userService.SignUp(user);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
    
    @PostMapping("/login")
    public ResponseEntity<Long> login(@RequestBody LoginRequest loginRequest) {

        Optional<User> partialFoundUser = userService.findByUsername(loginRequest.getUsername());

        if (partialFoundUser.isEmpty()) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

        boolean loginSuccess = userService.Login(loginRequest.getUsername(), loginRequest.getPassword());

        if (!loginSuccess) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

        return ResponseEntity.ok(partialFoundUser.get().getId());
    }




    @GetMapping("/getUserById") 
    public ResponseEntity<User> getUserById(@RequestParam Long userId) { 
        User foundUser = userService.findUserById(userId);
        return ResponseEntity.ok(foundUser);
    }

    @PutMapping("/updateUserById")
        public ResponseEntity<User> updateUser(@RequestBody User user) throws Exception {
        User updatedUser = userService.updateProfile(user);
        return ResponseEntity.ok(updatedUser);
    }

}
