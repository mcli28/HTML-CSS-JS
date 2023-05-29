import org.jfugue.Player;
public class TestMidi{
	public static void main(String[] args) {
		Player player = new Player();
		String musicString = "I[Harpsichord] A4h A5h D5h G5h";
		player.play(musicString, new File("text.mid"));
	}
}