package pl.edu.utp.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.io.Serializable;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@ToString
public class Person {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = true)
    private String name;

    @Column(nullable = true)
    private String surname;

    @Column(nullable = true)
    private Integer age;

    @OneToOne(fetch = FetchType.EAGER, cascade=CascadeType.ALL)
    private Address address;
}


//        CascadeType

//        ALL – wszystkie operacje danej relacji będą kaskadowane
//        DETACH – tylko odłączenie encji od kontekstu persystencji
//        MERGE – aktualizacja encji
//        PERSIST – zapisanie encji
//        REFRESH – odświeżenie stanu encji (pobranie stanu z bazy danych i zastąpienie obecnego)
//        REMOVE – usuwanie encji

