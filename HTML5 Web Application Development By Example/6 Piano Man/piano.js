function PianoApp() {
    var version = "6.3",
        audioManager = new AudioManager("audio")
        sustain = true,
        volume = 1.0;
}

this.start = function () {
    $(document).keyDown(onKeyDown)
                .keyup(onKeyUp);
    $("#sustain").change(function () { 
        sustain = $(this).is(":checked");
    });
    $("#volume").change(function () {
        volume = parseInt($(this).val()) / 100;
    });
    if (!isInputTypeSupported("range")) $("#volumen").css("width", "3em");
}

function onKeyDown(e){
    var note = keyCodesToNotes[e.which];
    if (note){
        pressPianoKey(note);
    }
}

function onKeyUp(e){
    var note = keyCodesToNotes[e.which];
    if (note){
        releasePianoKey(note);
    }
}

function pressPianoKey(note){
    var $key = getPianoKeyElement(note);
    keyDown($key);
}

function releasePianoKey(note){
    var $key = getPianoKeyElement(note);
    keyUp($key);
}

function getPianoKeyElement(note){
    return $(".keyboard .piano-key[data-note="+note+"]");
}

function initKeyboard(){
    var $keys = $(".keyboard .piano-key");
    if ($.isTouchSupported){
        $keys.touchstart(function(e){
            e.stopPropagation();
            e.preventDefault();
            keyDown($(this));
        }).touchend(function(){ keyUp($(this)); });
    } else {
        $keys.mousedown(function(){
            keyDown($(this));
            return false;
        })
        .mouseup(function(){ keyUp($(this)); })
        .mouseleave(function(){keyup($(this)); });
    }
    $keys.each(function(){
        var $key = $(this);
        var keyCode = keyCodes[$key.data("keycode")];
        keyCodesToNotes[keyCode] = $key.data("note");
    });
}

function keyDown($key) {
    if (!$key.hasClass("down")){
        $key.addClass("down");
        var noteName = $key.data("note");
        var audio = audioManager.getAudio(escape(noteName));
        audio.currentTime = 0;
        audio.volume = volume;
        audio.play();
    }
}

function keyUp ($key){
    $key.removeClass("down");
    if(!sustain){
        var noteName = $key.data("note");
        var audio = audioManager.getAudio(escape(noteName));
        audio.pause();
    }
}

function isInputTypeSupported(type){
    var $test = $("<input>");
    // Set input element to the type we're testing for
    $test.attr("type", type);
    return ($test[0].type == type);
}

