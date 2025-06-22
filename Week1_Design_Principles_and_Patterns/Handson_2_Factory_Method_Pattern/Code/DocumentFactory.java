public abstract class DocumentFactory {
    public abstract Document createDocument();

    public void renderDocument() {
        Document doc = createDocument();
        doc.open();
    }
}
