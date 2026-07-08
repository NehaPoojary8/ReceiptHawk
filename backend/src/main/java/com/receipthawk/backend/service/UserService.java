package com.receipthawk.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.receipthawk.backend.entity.User;
import com.receipthawk.backend.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public User registerUser(User user) {

        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            throw new RuntimeException("Email already exists!");
        }

        // Encrypt password before saving
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        return userRepository.save(user);
    }

    public User loginUser(String email, String password) {

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found!"));

        // Compare entered password with encrypted password
        if (!passwordEncoder.matches(password, user.getPassword())) {
            throw new RuntimeException("Invalid password!");
        }

        return user;
    }
    public User updateUser(Long id, User updatedUser) {

    User user = userRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("User not found!"));

    user.setFullName(updatedUser.getFullName());
    user.setPhoneNumber(updatedUser.getPhoneNumber());

    return userRepository.save(user);
}
public void changePassword(Long userId,
                           String currentPassword,
                           String newPassword,
                           String confirmPassword) {

    User user = userRepository.findById(userId)
            .orElseThrow(() -> new RuntimeException("User not found!"));

    // Check current password
    if (!passwordEncoder.matches(currentPassword, user.getPassword())) {
        throw new RuntimeException("Current password is incorrect!");
    }

    // Check new password and confirm password
    if (!newPassword.equals(confirmPassword)) {
        throw new RuntimeException("Passwords do not match!");
    }

    // Validate password length
    if (newPassword.length() < 8) {
        throw new RuntimeException("Password must be at least 8 characters!");
    }

    // Encrypt and save new password
    user.setPassword(passwordEncoder.encode(newPassword));

    userRepository.save(user);
}
}