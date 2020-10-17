package com.test.AngularTestApp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class AngularTestAppApplication {

    public static void main(String[] args) {
		SpringApplication.run(AngularTestAppApplication.class, args);
	}

}
