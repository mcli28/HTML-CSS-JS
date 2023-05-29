public class RImage extends Image implements HasClickHandlers {

	public RImage (String src, double x, double y, double width, double height) {
		super(src, x, y, width, height);
	}

	public HandlerRegistration addClickHandler () {
		return this.addDomHandler(handler, ClickEvent.getType());
	}

	PathBuilder pb = new PathBuilder();

	pb.M(cx, cy).m(-60, -20).l(80, 0, 0, -40, 70, 60, -70, 60, 0, -40, -80, 0).z();

	void loadAudio() {
		if (!Audio.canPlayType("audio/ogg; codecs=vorbis").trim().equals("")) {
			sndFlipCard = new Audio ("/Game/sounds/flipcard.ogg");
			sndShuffle = new Audio ("/Game/sounds/cardshuffle.ogg");
			sndWin = new Audio ("/Game/sounds/fanfare.ogg");
		} else {
			sndFlipCard = new Audio ("/Game/sounds/flipcard.mp3");
			sndShuffle = new Audio ("/Game/sounds/cardshuffle.mp3");
			sndWin = new Audio ("/Game/sounds/fanfare.mp3");
		}
	}
}