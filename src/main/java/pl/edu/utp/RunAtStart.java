package pl.edu.utp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import pl.edu.utp.Repository.PersonRepository;
import pl.edu.utp.model.Address;
import pl.edu.utp.model.Person;

import javax.annotation.PostConstruct;

/**
 * Created by Bartosz on 2016-12-16.
 */
@Component
public class RunAtStart {

    private final PersonRepository personRepository;

    @Autowired
    public RunAtStart(PersonRepository personRepository) {
        this.personRepository = personRepository;
    }

    @PostConstruct
    public void runAtStart() {

        Address adr = new Address();
        adr.setStreet("Ulica");

        Person p1 = new Person();
        p1.setName("Bartosz");
        p1.setSurname("Szydzik LUJ");
        p1.setAge(23);
        p1.setAddress(adr);


        personRepository.save(p1);

        Person per = personRepository.findByName("Bartosz");
        System.out.println("Bartek " + per.getSurname());
    }
}