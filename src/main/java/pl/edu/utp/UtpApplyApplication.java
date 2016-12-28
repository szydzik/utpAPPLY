package pl.edu.utp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
@CrossOrigin(allowedHeaders = {"Access-Control-Allow-Origin", "*"})
public class UtpApplyApplication {

	public static void main(String[] args) {
		SpringApplication.run(UtpApplyApplication.class, args);
	}
}
