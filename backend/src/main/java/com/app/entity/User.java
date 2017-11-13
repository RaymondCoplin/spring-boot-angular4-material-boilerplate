package com.app.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.Email;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;

@Entity(name = "Users")
@Data
@NoArgsConstructor
public class User implements Serializable {

    @Id
    @GeneratedValue
    private Long id;

    @NotNull
    @Column(nullable = false, unique = true)
    private String name;

    @Email
    @Column(nullable = false, unique = true)
    private String email;

    @NotNull
    private String password;

    @OneToOne
    @JoinColumn(name = "roleId")
    private Role role;

    public User(String name, String email, String password, Role role) {
        this.setName(name);
        this.setEmail(email);
        this.setPassword(password);
        this.setRole(role);
    }

    public User(Long id, String name, String email, String password, Role role) {
        this(name, email, password, role);
        this.setId(id);
    }

    @JsonIgnore
    public String getPassword() {
        return this.password;
    }

    @JsonProperty
    public void setPassword(String password) {
        this.password = password;
    }
}
