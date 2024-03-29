package com.example.SpringSecJWT.contoller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.SpringSecJWT.dto.ReqRes;
import com.example.SpringSecJWT.entity.Product;
import com.example.SpringSecJWT.repository.ProductRepo;

@RestController
public class AdminUsers {
    
    @Autowired
    private ProductRepo productRepo;

    @GetMapping("/public/product")
    public ResponseEntity<Object> getAllProducts() {
        return ResponseEntity.ok(productRepo.findAll());
    }

    @PostMapping("/admin/saveproduct")
    public ResponseEntity<Object> signUp(@RequestBody ReqRes productRequest) {
        Product productsToSave = new Product();
        productsToSave.setName(productRequest.getName());
        return ResponseEntity.ok(productRepo.save(productsToSave));
    }

    @GetMapping("/user/alone") 
    public ResponseEntity<Object> userAlone() {
        return ResponseEntity.ok("Users alone can access this API.");
    }

    @GetMapping("/adminuser/alone") 
    public ResponseEntity<Object> bothAdminandUsersApi() {
        return ResponseEntity.ok("Both Admin and Users can access this API.");
    }


}
