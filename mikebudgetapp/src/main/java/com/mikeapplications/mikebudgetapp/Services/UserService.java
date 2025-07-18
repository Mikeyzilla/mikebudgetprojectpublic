package com.mikeapplications.mikebudgetapp.Services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;

import com.mikeapplications.mikebudgetapp.Entities.User;
import com.mikeapplications.mikebudgetapp.Repositories.UserRepository;

@Service
public class UserService {
    
    @Autowired
    private final UserRepository userRepository;
    
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public void SignUp(User user) {
        String username = user.getUsername();
        String password = user.getPassword();
        String saltRounds = BCrypt.gensalt(10);
        String hashedPassword = BCrypt.hashpw(password, saltRounds);
        user.setUsername(username);
        user.setPassword(hashedPassword);
        userRepository.save(user);
    }

    public boolean userExists(String username) {
        Optional<User> isOptional = userRepository.findByUserName(username);
        return isOptional.isPresent();
    }

    public boolean Login(User user) {
        String username = user.getUsername();
        String password = user.getPassword();

        Optional<User> userOptional = userRepository.findByUserName(username);
        if (userOptional.isPresent()) {
            String hashedPassword = userOptional.get().getPassword();
            return BCrypt.checkpw(password, hashedPassword);
        }
        return false;
    }

    public User findUserById(Long id) {
        return userRepository.findById(id).orElseThrow(() -> new RuntimeException());
    }

    public User updateProfile(User user) throws Exception {
        Optional<User> userToBeUpdated = userRepository.findById(user.getId());
        if (userToBeUpdated.isEmpty()) {
            throw new Exception("No user supplied");
        }

        User existingUpdatedUser = userToBeUpdated.get();

        existingUpdatedUser.setOccupation(user.getOccupation());
        existingUpdatedUser.setIncome(user.getIncome());
        existingUpdatedUser.setLocation(user.getLocation());
        existingUpdatedUser.setDependents(user.getDependents());

        return userRepository.save(existingUpdatedUser);
    }


}
