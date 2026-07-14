package com.receipthawk.backend.service;

import java.io.File;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import net.sourceforge.tess4j.ITesseract;
import net.sourceforge.tess4j.Tesseract;

@Service
public class OCRService {

    public String extractText(MultipartFile image) {

        try {

            // Save uploaded image temporarily
            File tempFile = File.createTempFile("receipt", ".png");
            image.transferTo(tempFile);

            // Configure Tesseract
            ITesseract tesseract = new Tesseract();

            tesseract.setDatapath("C:\\Program Files\\Tesseract-OCR\\tessdata");
            tesseract.setLanguage("eng");

            // Extract text
            String text = tesseract.doOCR(tempFile);
            System.out.println("Starting OCR...");

            tempFile.delete();

            return text;

        } catch (Exception e) {
    e.printStackTrace();
    throw new RuntimeException("OCR failed: " + e.getMessage(), e);
}
    }
}