public class Main {
    public static void main(String[] args) {
        double initialValue = 1000.0;
        double growthRate = 0.1;
        int years = 5;

        double recursiveResult = RecursiveForecast.calculate(initialValue, growthRate, years);
        double iterativeResult = IterativeForecast.calculate(initialValue, growthRate, years);

        System.out.println("Future Value (Recursive): Rs." + recursiveResult);
        System.out.println("Future Value (Iterative): Rs." + iterativeResult);
    }
}
