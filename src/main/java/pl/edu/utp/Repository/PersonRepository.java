package pl.edu.utp.Repository;

import org.springframework.data.repository.CrudRepository;
import pl.edu.utp.model.Person;

import java.util.List;

/**
 * Created by Bartosz on 2016-12-16.
 */
public interface PersonRepository extends CrudRepository<Person, Integer> {

    List<Person> findAll();
    Person findByName(String name);

}