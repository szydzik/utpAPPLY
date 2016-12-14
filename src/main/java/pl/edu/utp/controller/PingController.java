package pl.edu.utp.controller;


import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.edu.utp.model.Person;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
public class PingController {

    @RequestMapping("/test")
    public List<Person> test() {
        List<Person> t = new ArrayList<>();
        t.add(new Person(1,"test") );
        t.add(new Person(2,"test2"));
        return t;
    }

    @RequestMapping("/test2")
    public String test2(){
        String s = "test2";
        return s;
    }

    @RequestMapping("/test3")
    public String test3(){
        String s = "Test3333";
        return s;
    }
}
