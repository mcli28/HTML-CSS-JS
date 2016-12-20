function Canvas2D($canvas) {
    var context = $canvas[0].getContext("2d"),
        width = $canvas[0].width,
        height = $canvas[0].height;
    var pageOffset = $canvas.offset();
    
    this.getCanvasPoint = function (pageX, pageY){
        return {
            x: pageX - pageOffset.left,
            y: pageY - pageOffset.top

        }
    }
    this.clear = function () {
        context.clearRect(0, 0, width, height);
        return this;
    }

    this.drawPoints = function(points){
        context.beginPath();
        context.moveTo(points[0].x, points[0].y);
        for (var i = 1; i < points.length; i++) {
            context.lineTo(points[i].x, points[i].y);            
        }
        context.stroke();
        return this;
    }
    $(window).resize(function() {pageOffset = $canvas.offset();});

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
    }

    function onTouchStart(e) {
        e.stopPropagation();
        e.preventDefault();
        penDown(e.touches[0].pageX, e.touches[0].pageY);
    }
    function onTouchMove(e) {
        e.stopPropagation();
        e.preventDefault();
        penDown(e.touches[0].pageX, e.touches[0].pageY);
    }

    function onTouchEnd(e) {
        penUp();
    }

    function checkTextInput (key){
        if (key == 13) { // Enter key
            curAction.text = $("#text-input input").val();
            $("#text-input").hide();
            redraw();
        } else if (key == 27) { // Escape
            actions.pop();
            $("#text-input").hide();
        }
    }

    function toolbarButtonClicked(action){
        switch(action){
            case "clear":
                if (confirm("Clear the canvas?")){
                    actions = [];
                    redraw();
                }
                break;
            case "undo":
                actions.pop();
                redraw();
                break;
            case "save":
                var url = $("#main>canvas")[0].toDataURL();
                window.open(url, "CanvasPadImage");
                break;
        }
    }

    function menuItemClicked(option, value){
        
        switch (option) {
            case "drawingTool":
                curTool = value;
                break;
            case "fillShapes":
                fillShapes = Boolean(value);
                break;
            default:
                canvas2d[option](value);
        }
    }

    function initColorMenu(){
        $("#color-menu li").each(function(i, e){
            $(e).css("background-color", $(e).data("value"));
        });
    }
    
    function initWidthMenu(){
        $("#width-menu li").each(function (i, e) {
            $(e).css("border-bottom", $(e).data("value")+"px solid black");
        });
    }

    function newAction(tool){
        return {
            tool: tool,
            color: canvas2d.penColor(),
            width: canvas2d.penWidth(),
            opacity: canvas2d.penOpacity(),
            fill: fillShapes,
            points: []
        }
    }

    function onMouseDown(e){
        e.preventDefault();
        penDown(e.pageX, e.pageY);
    }
    function penDown(pageX, pageY){
        if (curTool == "text"){
            // Check if it's already visible
            if ($("#text-input").is(":visible")) return;
            showTextInput(pageX, pageY);
        } else {
            drawing = true;
        }
        drawing = true;
        points = [];
        //points.push(canvas2d.getCanvasPoint(pageX, pageY));
        //actions.push(points);
        curAction = newAction(curTool);
        curAction.points.push(canvas2d.getCanvasPoint(pageX, pageY));
        actions.push(curAction);
    }

    function showTextInput(pageX, pageY){
        $("#text-input").css("top", pageY)
                        .css("left", pageX)
                        .fadeIn("fast");
        $("#text-input input").val("").focus();
    }

    function onMouseMove(e) {
        //var canvasPoint = canvas2d.getCanvasPoint(e.pageX, e.pageY);
        //showCoordinates(canvasPoint);
        penMoved(e.pageX, e.pageY);
    }
    function penMoved(pageX, pageY) {
        var canvasPoint = canvas2d.getCanvasPoint(pageX, pageY);
        showCoordinates(canvasPoint);
        if(drawing){
            if (curTool == "pen"){
                // Add another point
                curAction.points.push(canvasPoint);
            } else {
                // Change the second point
                curAction.points[1] = canvasPoint;
            }
            //curAction.points.push(canvasPoint);
            redraw();
        }
    }
    function redraw () {
        canvas2d.clear();
        canvas2d.savePen();
        for (var i in actions){
            var action = actions[i];
            canvas2d.penColor(action.color)
                    .penWidth(action.width)
                    .penOpacity(action.opacity);

            switch (action.tool) {
                case "pen":
                    canvas2d.drawPoints(action.points);
                    break;

                case "line":
                    canvas2d.drawLine(action.points[0], action.points[1]);
                    break;
                
                case "rect":
                    canvas2d.drawRect(action.points[0], action.points[1], action.fill);
                    break;
                case "circle":
                    var dx = Math.abs(action.points[1].x - action.points[0].x);
                    var dy = Math.abs(action.points[1].y - action.points[0].y);
                    var radius = Math.min(dx, dy);
                    canvas2d.drawRect(action.points[0], radius, action.fill);
                    break;
                case "text":
                    canvas2d.drawText(action.text, action.points[0], action.fill);
                    break;
                case "ellipse":
                    canvas2d.drawEllipse(action.points[0], action.points[1], action.fill);
                    break;
            }
            //canvas2d.drawPoints(actions[i]);
            //canvas2d.drawPoints(actions.points);
        }
        canvas2d.restorePen();
    }
    function onMouseUp(e) {
        penUp();
    }
    function penUp() {
        if (drawing){
            drawing = false;
            if (curAction.points.length < 2){
                actions.pop();
            }
        }
    }

    this.drawLine = function (point1, point2){
        context.beginPath();
        context.moveTo(point1.x, point1.y);
        context.lineTo(point2.x, point2.y);
        context.stroke();
        return this;
    }

    this.drawRect = function (point1, point2, fill){
        var w = point2.x - point1.x,
            h = point2.y - point1.y;
        if (fill) context.fillRect(point1.x, point1.y, w, h);
        else context.strokeRect(point1.x, point1.y, w, h);
        return this;
    }

    this.drawCircle = function (center, radius, fill){
        context.beginPath();
        context.arc(center.x, center.y, radius, 0, 2*Math.PI, true)
        if (fill) context.fill();
        else context.stroke();
        return this;
    }

    this.drawText = function (text, point, fill){
        if (fill) {
            context.fillText(text, point.x, point.y);
        } else {
            context.strokeText(text, point.x, point.y);
        }
    }

    this.drawEllipse = function(center, endPoint, fill){
        var rx = Math.abs(endPoint.x - center.x);
        var ry = Math.abs(endPoint.x - center.y);
        var radius = Math.max(rx, ry);
        var scaleX = rx / radius;
        var scaleY = ry / radius;

        context.save();
        context.translate(center.x, center.y);
        context.scale(scaleX, scaleY);
        context.beginPath();
        context.arc(0, 0, radius, 0, Math.PI*2, true);
        context.closePath();
        if (fill) context.fill();
        else context.stroke();
        context.restore();
        
        return this;
    }

    this.savePen = function (){
        context.save();
        return this;
    }
    this.restorePen = function (){
        context.restore();
        return this;
    }

    this.penWidth = function(newWidth){
        if (arguments.length){
            context.lineWidth = newWidth;
            return this;
        }
        return context.lineWidth
    }

    this.penColor = function (newColor){
        if (arguments.length){
            context.strokeStyle = newColor;
            context.fillStyle = newColor;
            return this;
        }
        return context.strokeStyle;
    }

    this.penOpacity = function (newOpacity){
        if(arguments.length){
            context.globalAlpha = newOpacity;
            return this;
        }
        return context
    }

    function showCoordinates(point){
        $("#coords").text(point.x + ", " + point.y);
    }
}