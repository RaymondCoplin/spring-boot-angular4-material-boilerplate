package com.app.security.auth;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Data
public class  JwtAuthenticationRequest implements Serializable {

    @Setter
    private String username;
    @Setter
    private String email;
    @Setter
    private String password;

    public JwtAuthenticationRequest() {
        super();
    }

    public JwtAuthenticationRequest(String username, String email, String password) {
        this.setUsername(username);
        this.setEmail(email);
        this.setPassword(password);
    }
}
