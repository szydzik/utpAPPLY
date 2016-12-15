package pl.edu.utp.controller;


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
        t.add(new Person(1,"Adam", "Małysz", 45) );
        t.add(new Person(2,"Tomek", "Kowalski", 45) );
        return t;
    }

    @RequestMapping("/ping")
    public String ping(){
        return "pong";
    }

}
