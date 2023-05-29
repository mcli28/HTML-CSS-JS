public class ShapeBuilderExample implements EntryPoint {
	
	public void onModuleLoad() {
		ShapeBuilder builder = new ShapeBuilder();
		builder.drawArc(new Arc(100, 100, 25, 0, Math.PI*2))
		Shape shape = builder.build();

		Surface surface = new Surface(640, 480);
		surface.setFillStyle(KnownColor.GREEN).fillShape(shape);
		surface.setFillStyle(KnownColor.YELLOW).translate(75, 0).fillShape(shape);
		RootPanel.get().add(Surface);

	}
}