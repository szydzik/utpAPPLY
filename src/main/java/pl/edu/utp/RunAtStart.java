package pl.edu.utp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import pl.edu.utp.dto.UserDTO;
import pl.edu.utp.model.Address;
import pl.edu.utp.model.Person;
import pl.edu.utp.model.Post;
import pl.edu.utp.repository.PersonRepository;
import pl.edu.utp.service.PostService;
import pl.edu.utp.service.UserService;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

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

    @Autowired
    UserService userService;

    @Autowired
    PostService postService;

    @PostConstruct
    public void runAtStart() {
        userService.createUser(new UserDTO("testuser@gmail.com", "password123", "testUser"));
        generatePosts().stream().forEach(p -> postService.save(p));
        generatePersons().stream().forEach(p -> personRepository.save(p));
    }

    private List<Person> generatePersons(){
        List<Person> list = new ArrayList<>();
        Address adr = new Address();
        adr.setStreetAddress1("Ulica");

        Person p1 = new Person();
        p1.setName("Bartosz");
        p1.setSurname("Szydzik");
        p1.setAge(23);
        p1.setAddress(adr);
        p1.setDateOfBirth(new Date());

        list.add(p1);

        Address adr2 = new Address();
        adr2.setStreetAddress1("Ulica2");

        Person p2 = new Person();
        p2.setName("Bartosz");
        p2.setSurname("Teska");
        p2.setAge(22);
        p2.setAddress(adr2);
        p2.setDateOfBirth(new Date());
        list.add(p2);

        return list;
    }

    private List<Post> generatePosts() {
        List posts = new ArrayList();

        Post post1 = new Post();
        post1.setAuthor("vhoang55");
        post1.setContent("A blog content to combine some cool tech stack together using " +
                "Spring boot/Spring Security, Angular-2 (still in beta CR-3), and Json WebToken. As" +
                "of right now, Angular 2 is still in CR-3, their teams are moving fast and ");

        post1.setDate(new Date().toString());
        post1.setTitle("Spring boot/security, angular2, jtw");



        Post post2 = new Post();
        post2.setAuthor("vhoang55");
        post2.setContent("Angular 2 is a really cool web framework. It's built on top of Typescript" +
                " and RxJs. The web is moving fast, and seems like the industry is moving toward the" +
                " reactive programming model. It's a new shift in programming paradigm. <br> <br>" +
                " Look like the upcoming release of Spring 5 is also all about functional reactive reactive programming. <br>" +
                " Here is the link <a href=\"https://github.com/vhoang55/spring-rest-futures\"> Spring rest futures </a> to project that uses some of the cool libraries to enable" +
                " such reactive programming model. <br><br>" +
                " Definitely requires some deep learning curve but worth learning and can't wait for" +
                " the exiting time ahead. Can't wait to see where the industry is heading next."
        );
        post2.setDate(new Date().toString());
        post2.setTitle("Reactive programming model");

        posts.add(post1);
        posts.add(post2);

        return  posts;

    }
}