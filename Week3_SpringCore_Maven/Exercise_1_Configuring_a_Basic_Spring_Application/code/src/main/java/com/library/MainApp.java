package com.library;

import com.library.service.BookService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
//Main Application class - entry point
public class MainApp {
    public static void main(String[] args) {
        //Load the spring application context from xml configuration
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
        //Get the book service bean defined
        BookService service = context.getBean("bookService", BookService.class);
        //using the service to add a book
        service.addBook("The Alchemist");
    }
}
