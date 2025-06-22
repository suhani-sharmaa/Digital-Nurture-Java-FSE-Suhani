public class Singleton{
    private static Singleton instance;//declaring a private static variable "instance" to hold the single instance of Singleton class.
    //It is private to ensure that instance is accessible only within the Singleton class.

    private Singleton(){
        System.out.println("Singleton Instance Created!");
    }//Declaring a private constructor to avoid external instantiation.Private so that no other class can create an instance of Singleton class.
    
    public static Singleton getInstance(){
        if(instance==null)
        {
            instance=new Singleton();
        }
        return instance;
    }//public method to return the single instance. It is public, so accessible from any class.
    
    public void showMessage()
    {
        System.out.println("Hello from Singleton instance!");
    }//A simple public method just to show the message.
}