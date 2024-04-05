package com.example.SpringSecJWT.service;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.SpringSecJWT.dto.ReqRes;
import com.example.SpringSecJWT.entity.OurUsers;
import com.example.SpringSecJWT.repository.OurUserRepo;

@Service
public class AuthService {
    @Autowired
    private OurUserRepo ourUserRepo;
    @Autowired
    private JWTUtils jwtUtils;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired 
    private AuthenticationManager authenticationManager;

    public ReqRes signUp(ReqRes regiatrationRequest) {
        ReqRes resp = new ReqRes();
        try {
            OurUsers ourUsers = new OurUsers();
            ourUsers.setEmail(regiatrationRequest.getEmail());
            ourUsers.setPassword(passwordEncoder.encode(regiatrationRequest.getPassword()));
            ourUsers.setRole(regiatrationRequest.getRole());
            OurUsers ourUserResult = ourUserRepo.save(ourUsers); 
            if(ourUserResult != null && ourUserResult.getId() > 0) {
                resp.setOurUsers(ourUserResult);
                resp.setMessage("User saved Successfully");
                resp.setStatusCode(200);
            }
        } catch (Exception e) {
            // TODO: handle exception
            resp.setStatusCode(500);
            resp.setError(e.getMessage());
        }

        return resp;
    }

    public ReqRes signIn(ReqRes signInRequest) {
        ReqRes response = new ReqRes();

        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(signInRequest.getEmail(), signInRequest.getPassword()));
            var user = ourUserRepo.findByEmail(signInRequest.getEmail()).orElseThrow();
            System.out.println("USER IS: " + user);
            var jwt = jwtUtils.generateToken(user);
            var refreshToken = jwtUtils.generateRefreshToken(new HashMap<>(), user);
            response.setStatusCode(200);
            response.setToken(jwt);
            response.setRefreshToken(refreshToken);
            response.setExpirationTime("24Hr");
            response.setMessage("Successfully Signed In!");
        } catch (Exception e) {
            // TODO: handle exception
            response.setStatusCode(500);
            response.setError(e.getMessage());
        }

        return response;
    }

    public ReqRes refreshToken(ReqRes refreshTokenRequest) {
        ReqRes response = new ReqRes();
        String ourEmail = jwtUtils.extractUsername(refreshTokenRequest.getToken());
        OurUsers users = ourUserRepo.findByEmail(ourEmail).orElseThrow();
        if(jwtUtils.isTokenValid(refreshTokenRequest.getToken(), users)) {
            var jwt = jwtUtils.generateToken(users);
            response.setStatusCode(200);
            response.setToken(jwt);
            response.setRefreshToken(refreshTokenRequest.getToken());
            response.setExpirationTime("24Hr");
            response.setMessage("Successfully Refreshed Token");
        }

        response.setStatusCode(500);
        return response; 
    }
}
