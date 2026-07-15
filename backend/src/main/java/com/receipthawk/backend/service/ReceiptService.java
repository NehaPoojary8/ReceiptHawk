package com.receipthawk.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class ReceiptService {

    @Autowired
    private OCRService ocrService;

    public String scanReceipt(MultipartFile image) {

        if (image == null || image.isEmpty()) {
            throw new RuntimeException("Please upload a receipt image.");
        }

        String fileName = image.getOriginalFilename().toLowerCase();
System.out.println("Uploaded file: " + fileName);

        if (fileName == null ||
            !(fileName.endsWith(".png") ||
              fileName.endsWith(".jpg") ||
              fileName.endsWith(".jpeg"))) {

            throw new RuntimeException("Only PNG, JPG and JPEG images are allowed.");
        }
        System.out.println("Validation Passed");

        return ocrService.extractText(image);
    }
}