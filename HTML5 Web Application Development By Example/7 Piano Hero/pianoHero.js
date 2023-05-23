function PianoHeroApp(){
    var version = "7.1",
        audioManager = new AudioManager("audio"),
        splashPanel = new SplashPanel(audioManager),
        gamePanel = new GamePanel(audioManager),
        curPanel = undefined;
    
    function showPanel(panel){
        if (curPanel) curPanel.hide();
        curPanel = panel;
        curPanel.show();
    }
    this.startGame = function(songName, rate, playGame){
        gamePanel.setOptions(songName, rate, playGame);
        showPanel(gamePanel);
    }
    function updateNotes(){
        $(".note", $notesPanel).each(function () {
            var $note = $(this);
            var top = $note.position().top();
            if (top <= 200){
                //Move the note down
                top += pixelsPerFrame;
                $note.css("top", top);
                if (top + 20  > 200){
                    // The note hit the booton of the panel
                    currentNote.note = $note.data("note");
                    currentNote.time = getCurrentTime();
                    currentNote.$note = $note;
                    if (practiceMode) pressPianoKey($note.data("note"));
                }
            } else {
                // Note is below the panel, remove it
                if (practiceMode) releasePianoKey($note.data("note"));
                $note.remove();
            }
        });
        // Check if there are any notes left
        if ($(".note", $notesPanel).length == 0){
            // No more notes, game over man
            if (!practiceMode) showScore();
            endGame();
        }
    }
    this.quitGame = function(){
        showPanel(splashPanel);
    }
    this.start = function(){
        $(document).keydown(function(e){curPanel.onKeyDown(e); })
                    .keyup(function(e){curPanel.onKeyUp(e);});
        showPanel(splashPanel);
        splashPanel.loadAudio();
    }
}
