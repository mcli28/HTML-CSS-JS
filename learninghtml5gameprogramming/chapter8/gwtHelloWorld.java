import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.*;

public class MyFirstPage implements EntryPoint{

	public static native void log (String text) {
		return console.log(text);
	}

	public void onModuleLoad() {
		Button button = new Button("Click Me");

		button.addClickHandler(new ClickHandler(){
			public void onClick(ClickEvent event){
				Window.alert("Hello, World!");
			}
		});

		RootPanel.get("buttonDiv").add(button);
		
	}
}