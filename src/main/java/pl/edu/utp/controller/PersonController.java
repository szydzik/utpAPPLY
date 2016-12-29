package pl.edu.utp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.edu.utp.model.Person;
import pl.edu.utp.repository.PersonRepository;

import java.util.Arrays;
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
        return personRepository.findAll();
    }

    @GetMapping(path = "/{id}")
    public Person greetings(@PathVariable("id") Long id) {
        return personRepository.findOne(id);
    }

    @PostMapping(produces = "application/json", consumes = "application/json")
    public Person save(@RequestBody Person person) {
        System.out.println("Debug: "+person.toString());
        return personRepository.save(person);
    }

    @PutMapping
    public void put(@RequestBody Person person) {
        personRepository.save(person);
    }

    @RequestMapping(path = "/test")
    public Person test(){
        Person p = new Person();
        p.setId(1l);
        p.setName("yyyyy");
        p.setSurname("xxxxxxxx");
        return p;
    }

    @DeleteMapping(value = "/{id}")
    public void deleteById(@PathVariable("id") Long id) {
        personRepository.delete(id);
    }

}
