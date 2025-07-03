package com.library.service;

import com.library.repository.BookRepository;
//service class to handle business logic related to books
public class BookService {
    //dependency on bookrepository(injected by Spring)
    private BookRepository bookRepository;
    //Setter method(dependency injection)
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    //Method to add a book using the repository
    public void addBook(String bookName) {
        System.out.println("Adding book: " + bookName);
        bookRepository.saveBook(bookName);
    }
}
