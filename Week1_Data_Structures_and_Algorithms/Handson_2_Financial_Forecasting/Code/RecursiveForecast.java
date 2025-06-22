public class RecursiveForecast {
    public static double calculate(double initialValue, double growthRate, int years) {
        if (years == 0) {
            return initialValue;
        }
        return calculate(initialValue, growthRate, years - 1) * (1 + growthRate);
    }
}
