package pl.edu.utp.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by xxbar on 14.12.2016.
 */
@Controller
public class RootController {

    @RequestMapping("")
    public String home(){
        return "index";
    }

    @RequestMapping("person-list")
    public String personList(){
        return "person-list";
    }

    @RequestMapping("person-details")
    public String personDetails(){
        return "person-details";
    }

    @RequestMapping("home-page")
    public String homePage(){
        return "home-page";
    }

}
