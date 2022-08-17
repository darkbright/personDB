package com.example.persondb.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/")
    public String index() {
        return "Hello World! Hello Spring Boot!";
    }

    @GetMapping("/test")
    public String test() {
        return "Hello World! Test Spring Boot!";
    }

}