function SplashPanel(audioManager){
    var $div = $("#splash"),
        error = false;
    this.show = function(){
        $div.fadeIn();
        return this;
    }
    this.hide = function(){
        $div.hide();
        return this;
    }
}

audioManager.getAudio(noteName, function(){
    if (error) return;
    if (++loaded == count) showOptions();
    else updateProgress(loaded, count);
}, function(audio){showError(audio);});

function updateProgress(loadedCount, totalCount){
    var pctComplete = parseInt(100 * loadedCount / totalCount);
    $("progress", $div)
        .val(pctComplete)
        .text(pctComplete + "%");
}

function showOptions(){
    $(".loading", $div).hide();
    $(".options", $div).fadeIn();
}

function showError(audio){
    error = true;
    $(".loading", $div).hide();
    $(".error", $div)
        .append("<div>"+audio.src+"<div>")
        .show();
}
$(".options button", $div).click(function(){
    var songName = $("#select-song>option:selected", $div).val();
    var rate = Number($("#select-rate>option:selected", $div).val());
    var playGame = ($(this).attr("id") == "start-game");
    app.startGame(songName, rate, playGame);
});