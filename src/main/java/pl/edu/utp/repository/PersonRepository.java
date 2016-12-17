package pl.edu.utp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;
import pl.edu.utp.model.Person;

import java.util.List;

/**
 * Created by Bartosz on 2016-12-16.
 */
public interface PersonRepository extends CrudRepository<Person, Long> {


    List<Person> findAll();
    Person findByName(String name);

    @Modifying
    @Transactional
    @Query("update Person p set p.name = :newName where p.id = :PersonId")
    Person update(@Param("PersonId") Integer id, @Param("newName") String name);

    @Transactional
    void deleteById(Integer id);
}