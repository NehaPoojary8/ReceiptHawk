package com.receipthawk.backend.service;

import java.io.File;
import java.io.IOException;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import net.sourceforge.tess4j.ITesseract;
import net.sourceforge.tess4j.Tesseract;
import net.sourceforge.tess4j.TesseractException;

@Service
public class OCRService {

    public String extractText(MultipartFile image) {

        try {

            // Save uploaded image temporarily
           String originalName = image.getOriginalFilename();

String extension = ".png"; // Default extension

if (originalName != null && originalName.contains(".")) {
    extension = originalName.substring(originalName.lastIndexOf("."));
}

File tempFile = File.createTempFile("receipt", extension);
image.transferTo(tempFile); 
System.out.println("Temp file: " + tempFile.getAbsolutePath());
System.out.println("Size: " + tempFile.length());
            // Configure Tesseract
            ITesseract tesseract = new Tesseract();

            tesseract.setDatapath("C:\\Program Files\\Tesseract-OCR\\tessdata");
            tesseract.setLanguage("eng");

            // Extract text
            System.out.println("Starting OCR...");
            String text = tesseract.doOCR(tempFile);
            

            tempFile.delete();

            return text;

        } 
        catch (IOException | TesseractException e) {
    e.printStackTrace();
    throw new RuntimeException("OCR failed: " + e.getMessage(), e);
}
    }
}