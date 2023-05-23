function CanvasPadApp() {
    var version = "4.3",
        canvas2d = new Canvas2D($("#main>canvas")),
        toolbar = new Toolbar($("#toolbar")),
        drawing = false,
        points = [],
        curTool = "pen",
        curAction = newAction(curTool),
        actions = [],
        fillShapes = true;
    // ...
}

function toolbarButtonClicked(action){
    switch(action){
        /*case "clear":
            if (confirm("Clear the canvas?")){
                actions = [];
                redraw();
            }
            break;
        case "undo":
            actions.pop();
            redraw();
            break;*/
        case "save":
            var url = $("#main>canvas")[0].toDataURL();
            window.open(url, "CanvasPadImage");
            break;
    }
}

this.start = function () {
    toolbar.toolbarButtonClicked = toolbarButtonClicked;
    toolbar.menuItemClicked = menuItemClicked;
    $("#app header").append(version);
    $("#main>canvas").mousemove(onMouseMove)
        .mousedown(onMouseDown)
        .mouseup(onMouseUp)
        .mouseout(onMouseUp);
    $("#text-input input").keydown(function (e){
        checkTextInput(e.which);
    });
    if($.isTouchSupported){
        $("#main>canvas").touchstart(onTouchStart)
            .touchmove(onTouchMove)
            .touchend(onTouchEnd);
    } else {
        $("#main>canvas").mousedown(onMouseDown)
            .mousemove(onMouseMove)
            .mouseup(onMouseUp)
            .mouseout(onMouseUp);
    }

    if (window.File && window.FileReader){
        $("#load-menu input[type=file]").change(function (e){
            onLoadFile($(this));
        });
    } else {
        loadImage("images/default.jpg");
    }
}

function onLoadFile($input) {
    var file = $input[0].files[0];
    if (file.type.match("image.*")){
        var reader = new FileReader();
        reader.onload = function () { loadImage(reader.result); }
        reader.readAsDataURL(file);
    } else {
        alert("Not a valid image type: "+file.type);
        setStatus("Error loading image!")
    }
}

function loadImage(url) {
    setStatus("Loading image");
    $img.attr("src", url);
    $img[0].onload = function () {
        // Here "this" is the image
        canvas.width = this.width;
        canvas.height = this.height;
        context.drawImage(this, 0, 0);
        setStatus("Choose an effect");
    }
    $img[0].onerror = function(){
        setStatus("Error loading image!");
    }
}