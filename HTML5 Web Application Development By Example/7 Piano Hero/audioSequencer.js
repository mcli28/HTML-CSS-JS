function AudioSequencer(){
    var _events = [],
        _playbackRate = 1,
        _playing = false,
        eventHandler = undefined,
        timeoutID = 0;
    
    this.events = function(newEvents){
        if (newEvents){
            _events = newEvents;
            return this;
        }
        return _events;
    }
    this.playbackRate = function(newRate){
        if (newRate){
            _playbackRate = newRate;
            return  this;
        }
        return _playbackRate;
    }
    this.isPlaying = function(){
        return _playing;
    }
    this.startPlayback = function(callback, startPos){
        startPos = startPos || 0;
        if(!_playing && _events.length > 0){
            _playing = true;
            eventHandler = callback;
            playEvent(startPos);
            return true;
        }
        return false;
    }

    function onAudioEvent (eventCode, note){
        switch (eventCode){
            case AudioSequencer.eventCodes.noteOn:
                addNote(note);
                break;
            case AudioSequencer.eventCodes.endOfTrack:
                sequencer.stopPlayback();
                break;
        }
    }
    function addNote(note){
        noteCount++;
        // Add a new note element
        var $note = $("<div class='note'></div>");
        $note.data("note", note);
        $notesPanel.append($note);

        var $key = getPianoKeyElement(note);
        // Position the note element over the piano key
        $note.css("top", "0")
            .css("left", $key.position().left)
            .css("width", $key.css("width"));
        
        if ($key.hasClass("black")){
            $note.addClass("black");
        }
    }

    function playEvent(index){
        var event = _events[index];
        eventHandler(event.event, event.note, index);

        index++;
        if(index < _events.length){
            timeoutID = setTimeout(function(){
                playEvent(index);
            }, _events[index].deltaTime * (1/_playbackRate));
        }
        else _playing = false; // all done
    }
    this.stopPlayback = function (){
        if (_playing){
            _playing = false;
            if (timeoutID) clearTimeout(timeoutID);
            eventHandler = undefined;
        }
    }
    AudioSequencer.eventCodes = {
        noteOn: 1,
        noteOff: 2,
        cuePoint: 3,
        endOfTrack: 4
    }

    function GamePanel(audioManager){
        var sequencer = new AudioSequencer();
        this.setOptions = function (songName, rate, playGame){
            practiceMode = !playGame;
            return this;
        }
    }
}