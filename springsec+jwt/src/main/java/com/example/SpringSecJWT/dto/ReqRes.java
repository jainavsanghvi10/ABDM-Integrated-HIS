package com.example.SpringSecJWT.dto;

import java.util.List;

import org.springframework.boot.autoconfigure.kafka.KafkaProperties.Producer;

import com.example.SpringSecJWT.entity.OurUsers;
import com.example.SpringSecJWT.entity.Product;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ReqRes {


    private int statusCode;
    private String error;
    private String message;
    private String token;
    private String refreshToken;
    private String expirationTime;
    private String name;
    private String email;
    private String role;
    private String password;
    private List<Product> products;
    private OurUsers ourUsers;

}
