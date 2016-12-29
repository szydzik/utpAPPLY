package pl.edu.utp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import pl.edu.utp.repository.PersonRepository;
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
        adr.setStreetAddress1("Ulica");

        Person p1 = new Person();
        p1.setName("Bartosz");
        p1.setSurname("Szydzik");
        p1.setAge(23);
        p1.setAddress(adr);
        personRepository.save(p1);

        Address adr2 = new Address();
        adr2.setStreetAddress1("Ulica2");

        Person p2 = new Person();
        p2.setName("Bartosz");
        p2.setSurname("Teska");
        p2.setAge(22);
        p2.setAddress(adr2);
        personRepository.save(p2);

    }
}