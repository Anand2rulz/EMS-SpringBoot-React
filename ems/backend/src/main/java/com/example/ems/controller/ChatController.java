package com.example.ems.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.ems.service.EMSChatService;

@RestController
@RequestMapping("/api/chat")
@CrossOrigin(origins = "http://localhost:3000")
public class ChatController {

    private final EMSChatService chatService;

    public ChatController(EMSChatService chatService) {
        this.chatService = chatService;
    }

    // Accept plain text from React
    @PostMapping(consumes = "text/plain")
    public String chat(@RequestBody String message) {
        return chatService.process(message);
    }
}
