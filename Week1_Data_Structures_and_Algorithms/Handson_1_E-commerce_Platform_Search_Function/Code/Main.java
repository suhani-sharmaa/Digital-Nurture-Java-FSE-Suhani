import java.util.*;

public class Main {
    public static void main(String[] args) {
        Product[] products = {
            new Product(1, "Shoes", "Footwear"),
            new Product(2, "T-Shirt", "Apparel"),
            new Product(3, "Laptop", "Electronics")
        };

        // Sort for binary search
        Arrays.sort(products, Comparator.comparing(p -> p.productName.toLowerCase()));

        Product foundLinear = SearchFunctions.linearSearch(products, "Laptop");
        Product foundBinary = SearchFunctions.binarySearch(products, "Laptop");

        System.out.println("Linear Search Found: " + (foundLinear != null ? foundLinear.productName : "Not Found"));
        System.out.println("Binary Search Found: " + (foundBinary != null ? foundBinary.productName : "Not Found"));
    }
}
