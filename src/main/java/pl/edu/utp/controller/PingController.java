package pl.edu.utp.controller;


import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.edu.utp.model.Person;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
public class PingController {

    @RequestMapping("/person-list")
    public List<Person> test() {
        List<Person> t = new ArrayList<>();
        t.add(new Person("Adam", "Małysz", 45) );
        t.add(new Person("Tomek", "Kowalski", 45) );
        return t;
    }

    @RequestMapping("/ping")
    public String ping(){
        return "pong";
    }

    @PostMapping(path = "/person-list/get", produces = "application/json", consumes = "application/json")
    public Person getPersons(@RequestBody Person person) {
        person.setId(1);
        return person;
    }

}
