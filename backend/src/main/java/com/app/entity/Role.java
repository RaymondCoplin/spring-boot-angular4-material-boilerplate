package com.app.entity;

import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Collection;
import java.util.List;

@Entity(name = "Roles")
@Data
public class Role implements Serializable {

    @Id
    @GeneratedValue
    private Long id;
    private String label;
    @ManyToMany
    @JoinTable(
            name="RolesPrivileges",
            joinColumns = @JoinColumn(
                    name = "roleId", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(
                    name = "privilegeId", referencedColumnName = "id")
    )
    private Collection<Privilege> privileges;

    public Role(){}
    public Role(Long id, String label) {
        this.id = id;
        this.label = label;
    }

}
