package pl.edu.utp.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.edu.utp.model.Address;
import pl.edu.utp.model.Person;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by xxbar on 17.12.2016.
 */
@RestController
@RequestMapping("/api")
public class PersonController {

    @RequestMapping("/person-list")
    public List<Person> test() {
        List<Person> t = new ArrayList<>();
        t.add(new Person(1,"Adam", "Małysz", 45,  new Address(1, "Stawowa 12")));
        t.add(new Person(1,"Tomek", "Kowalski", 45, new Address(2,"Kasprzaka 4")));
        return t;
    }

    @PostMapping(path = "/person-list/get", produces = "application/json", consumes = "application/json")
    public Person getPersons(@RequestBody Person person) {
        person.setId(1);
        return person;
    }

}
