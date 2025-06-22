public class Main {
    public static void main(String[] args) {
        DocumentFactory pdfFactory = new PdfFactory();
        pdfFactory.renderDocument();  // Output: Opening PDF document!

        DocumentFactory wordFactory = new WordFactory();
        wordFactory.renderDocument(); // Output: Opening Word document!

        DocumentFactory excelFactory = new ExcelFactory();
        excelFactory.renderDocument(); // Output: Opening Excel document!
    }
}
