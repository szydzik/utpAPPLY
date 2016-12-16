package pl.edu.utp.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.io.Serializable;

/**
 * Created by Bartosz on 2016-12-16.
 */

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class Address implements Serializable{

    @Id
    @GeneratedValue
    private Integer id;
    private String street;

    public Address(String street){
        this.street = street;
    }
}
