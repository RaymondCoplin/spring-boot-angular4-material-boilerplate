package com.app.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.io.Serializable;

@Entity(name = "Privileges")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Privilege implements Serializable {

    @Id
    @GeneratedValue
    private Long id;
    private String label;

    public Privilege(String label) {
        this.label = label;
    }

}
