package com.example.SpringSecJWT.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.SpringSecJWT.entity.Product;

public interface ProductRepo extends JpaRepository<Product, Integer> {

    
}
