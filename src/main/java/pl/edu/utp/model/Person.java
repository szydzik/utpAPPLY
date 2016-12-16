package pl.edu.utp.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class Person implements Serializable{
    @Id
    @GeneratedValue
    private Integer id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String surname;

    @Column(nullable = false)
    private Integer age;

    @OneToOne(fetch = FetchType.EAGER, cascade=CascadeType.ALL)
    private Address address;

    public Person(String name, String surname, Integer age, Address address) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.address = address;
    }
}


//        CascadeType

//        ALL – wszystkie operacje danej relacji będą kaskadowane
//        DETACH – tylko odłączenie encji od kontekstu persystencji
//        MERGE – aktualizacja encji
//        PERSIST – zapisanie encji
//        REFRESH – odświeżenie stanu encji (pobranie stanu z bazy danych i zastąpienie obecnego)
//        REMOVE – usuwanie encji

