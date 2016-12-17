package pl.edu.utp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.edu.utp.model.Person;
import pl.edu.utp.repository.PersonRepository;

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

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Person greetings(@PathVariable("id") Long id) {
        return personRepository.findOne(id);
    }

    @PostMapping
    public void add(@RequestBody Person person) {
        personRepository.save(person);
    }

    @PutMapping
    public void update(@RequestBody Person person) {
        personRepository.save(person);
    }

    @PutMapping(value = "/{id}")
    public void updateNameById(@PathVariable("id") Integer id, @RequestBody String name) {
        personRepository.update(id, name);

    }

    @DeleteMapping(value = "/{id}")
    public void deleteById(@PathVariable("id") Long id) {
        personRepository.delete(id);
    }

}
