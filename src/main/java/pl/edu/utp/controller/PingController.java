package pl.edu.utp.controller;


import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.edu.utp.model.Person;
import pl.edu.utp.model.Address;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
public class PingController {

    @RequestMapping("/ping")
    public String ping(){
        return "pong";
    }

}
