public class SurfaceExample implements EntryPoint {

	public void onModuleLoad() {
		Surface surface = new Surface(640, 480);
		surface.setFillStyle(KnownColor.BLUE).fillRectangle(100, 175, 40, 40);
		surface.setFillStyle(KnownColor.BLACK).scale(2).fillText("Hello from gwt-g2d", 100, 100);
		RootPanel.get().add(surface);		
	}
}