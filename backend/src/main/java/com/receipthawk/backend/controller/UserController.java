package com.receipthawk.backend.controller;
import com.receipthawk.backend.dto.ChangePasswordRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.receipthawk.backend.entity.User;
import com.receipthawk.backend.service.UserService;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = {
        "http://localhost:5173",
        "http://localhost:5174"
})
public class UserController {

    @Autowired
    private UserService userService;

    @PutMapping("/{id}")
    public User updateUser(@PathVariable Long id,
                           @RequestBody User user) {

        return userService.updateUser(id, user);
        
    }
    @PutMapping("/change-password")
public String changePassword(@RequestBody ChangePasswordRequest request) {

    userService.changePassword(
            request.getUserId(),
            request.getCurrentPassword(),
            request.getNewPassword(),
            request.getConfirmPassword()
    );

    return "Password updated successfully!";
}
}