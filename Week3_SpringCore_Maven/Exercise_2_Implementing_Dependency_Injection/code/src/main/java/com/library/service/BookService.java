package com.library.service;

import com.library.repository.BookRepository;

public class BookService {
    private BookRepository bookRepository;

    // Setter method for DI
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void displayServiceMessage() {
        System.out.println("BookService is working...");
        bookRepository.displayRepositoryMessage(); // call to BookRepository
    }
}
