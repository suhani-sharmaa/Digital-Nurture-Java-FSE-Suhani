public class Main{
    public static void main(String args[])
    {
        Singleton instance1=Singleton.getInstance();// Calls the static getInstance() method to obtain the single Singleton instance and assigns it to a variable named instance1.
        Singleton instance2=Singleton.getInstance();//Similarly calling the static getInstance() method to obtain the single Singleton instance and assigning it to a variable named instance2.
        if(instance1==instance2)//checking if both instances are same or not.
        {
            System.out.println("Both instances are the same");
        }
    }
}