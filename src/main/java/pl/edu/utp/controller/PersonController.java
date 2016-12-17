package pl.edu.utp.controller;

import org.springframework.web.bind.annotation.*;
import pl.edu.utp.model.Address;
import pl.edu.utp.model.Person;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Bartosz Szydzik on 17.12.2016.
 */
@RestController
@RequestMapping("/api/person")
public class PersonController {

    @RequestMapping("")
    public List<Person> getAll() {
        List<Person> t = new ArrayList<>();
        t.add(new Person(1,"Adam", "Małysz", 45,  new Address(1, "Stawowa 12")));
        t.add(new Person(1,"Tomek", "Kowalski", 45, new Address(2,"Kasprzaka 4")));
        return t;
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Person greetings(@PathVariable("id") Long id) {
        return new Person(1,"Adam", "Małysz", 45,  new Address(1, "Stawowa 12"));
    }

}
