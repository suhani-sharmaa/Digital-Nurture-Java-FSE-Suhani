Week 1 - SOLID Principles
Exercise 2: Implementing the Factory Method Pattern

Factory Method Pattern:
The Factory Method Pattern is a creational design pattern used to create objects without specifying the exact class of object that will be created.

(The Factory Method Pattern is a way to create objects in Java without saying the exact class name.
It lets a class decide at runtime which object to make.)

Concept:
Object Creation via Method:Objects are not created using new in the main code. Instead, a method is used to create and return the object.
Common Interface:All created objects follow a common interface or superclass, making it easy to use them without knowing their exact type.
Loose Coupling:The main code is not directly dependent on specific classes. This makes the code easier to extend and maintain.

Considering the example of a Document Processing System:
Problem:
A company has an application that processes different types of documents based on user input:
If a user uploads a PDF, the system should handle it as a PdfDocument.
For Word files, it should treat them as WordDocument.
For Excel files, it should treat them as ExcelDocument.
Each document type needs to be opened, displayed, or processed differently. To avoid hardcoding object creation and keep the system flexible and extensible, the Factory Method Pattern is used.