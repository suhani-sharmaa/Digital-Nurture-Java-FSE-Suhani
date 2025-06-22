Week 1 - SOLID Principles
Exercise 1: Implementing the Singleton Pattern

Singleton pattern:
The Singleton Pattern is a design pattern that ensures a class has only one instance, and provides a global point of access to that instance.

Concept:
Single Instance: Only one object of the class is ever created.
Global Access Point: The same object can be accessed globally from anywhere in the application.
Lazy Initialization: The instance is created only when needed.

Considering the example of Print Spooler:
Problem: Multiple print requests may come from different apps or users.
Singleton Use: A single spooler object manages all print jobs, preventing conflicts or repeated access to the printer.
Ensures only one queue manager for printing.
