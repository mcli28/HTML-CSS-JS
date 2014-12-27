int bytesRead = 0;
boolean isPinSet;
byte stored[2];
void setup () {
  Serial.begin(57600);
}
void loop () {
	while (Serial.available()){
		int data = Serial.read();
		stored[bytesRead] = data;
		bytesRead++;

		if (bytesRead == 2) {
			if (isPinSet == false) {
				isPinSet = true;
				pinMode(stored[0], OUTPUT);
			} else {
				digitalWrite(stored[0], stored[1]);
			}
			bytesRead = 0;
		}
	}
}