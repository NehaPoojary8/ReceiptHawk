package com.receipthawk.backend.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.receipthawk.backend.service.ReceiptService;

@RestController
@RequestMapping("/receipt")
@CrossOrigin(origins = "http://localhost:5173")
public class ReceiptController {

    @Autowired
    private ReceiptService receiptService;

    @PostMapping("/scan")
    public ResponseEntity<Map<String, String>> scanReceipt(
            @RequestParam("image") MultipartFile image) {
                System.out.println("Receipt API called");

        String extractedText = receiptService.scanReceipt(image);

        Map<String, String> response = new HashMap<>();
        response.put("text", extractedText);

        return ResponseEntity.ok(response);
    }
}