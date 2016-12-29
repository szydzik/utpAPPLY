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
public class Address {

    @Id
    @GeneratedValue
    private Long id;
    private String streetAddress1;
    private String streetAddress2;
    private String postalCode;
    private String city;
    private String province;
    private String country;

}
