var musicData = {
    littleStar:[
        {deltaTime: 0, event: 3, note: null},
        {deltaTime: 0, event: 1, note: "3C"},
        {deltaTime: 500, event: 2, note: "3C"},
        {deltaTime: 0, event: 1, note: "3C"},
        {deltaTime: 500, event: 2, note: "3C"},
        {deltaTime: 0, event: 1, note: "3G"},
        {deltaTime: 500, event: 2, note: "3G"},
        // ...
        {deltaTime: 0, event: 4, note: null},
    ]
}

function startGame(){
    $resultsPanel.hide();
    $notesPanel.show();
    // Reset score
    noteCount = 0;
    notesCorrect = 0;
    score = 0;
    // Start interval for notes animation
    intervalId = setInterval(function(){updateNotes(); }, 1000 / framesPerSecond);
    // Start playback of the song
    sequencer.startPlayback(onAudioEvent, 0);
}