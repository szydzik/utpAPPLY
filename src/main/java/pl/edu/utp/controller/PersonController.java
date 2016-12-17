package pl.edu.utp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.edu.utp.model.Address;
import pl.edu.utp.model.Person;
import pl.edu.utp.repository.PersonRepository;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Bartosz Szydzik on 17.12.2016.
 */
@RestController
@RequestMapping("/api/person")
public class PersonController {

    PersonRepository personRepository;

    @Autowired
    public PersonController(PersonRepository personRepository) {
        this.personRepository = personRepository;
    }

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

    @PostMapping
    public void add(@RequestBody Person person) {
        personRepository.save(person);
    }

    @PutMapping
    public void update(@RequestBody Person person) {

    }

    @PutMapping(value = "/{id}")
    public void updateById(@PathVariable("id") Integer id, @RequestBody Person person) {

    }

    @DeleteMapping(value = "/{id}")
    public void deleteById(@PathVariable("id") Integer id) {
        personRepository.delete(id);
    }

}
