function MandelbrotApp() {
    var version = "9.2",
        canvas = $("canvas")[0],
        context = canvas.getContext("2d");

    function drawMandelbrot(left, top, right, bottom){
        setStatus("Drawing...");
        var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
        var generator = new MandelbrotGenerator(canvas.width, canvas.height, left, top, right, bottom);
        generator.draw(imageData);
        context.putImageData(imageData, 0, 0);
        setStatus("Finished.");
    }

    this.start = function () {
        $("#app header").append(version);
        $("button.draw").click(function (){
            var data = $(this).data("settings");
            drawMandelbrot(data[0], data[1], data[2], data[3]);
        });
        setStatus("ready");
    }
}


function MandelbrotGenerator(canvasWidth, canvasHeight, left, top, right, bottom){
    var scalarX = (right - left) / canvasWidth,
        scalarY = (bottom - top) / canvasHeight,
        maxIterations = 1000,
        abort = false,
        inSetColor = {r: 0x00, g: 0x00, b: 0x00},
        colors = [ /* array of color objects */];
    
    function getMandelbrotX(x) {
        return scalarX * x + left;
    }
    
    function getMandelbrotY(y) {
        return scalarY * y + top;
    }

    this.draw = function (imageData){
        abort = false;
        for (var y = 0; y < canvasHeight; y++){
            var my = getMandelbrotY(y);
            for (var x = 0; x < canvasHeight; x++){
                if(abort) return;
                var mx = getMandelbrotX(x);
                var iteration = getIteration(mx, my);
                var color = getColor(iteration);
                setPixel(imageData, x, y, color);
            }
        }
    }
    function getIteration(x0, y0){
        var x = 0,
            y = 0,
            iteration = 0;
        do {
            iteration++;
            if(iteration >= maxIterations) return -1;
            var xtemp = x * x - y * y + x0;
            y = 2 * x * y + y0;
            x = xtemp;
        } while (x * x + y * y < 4);
        return iteration;
    }
    function getColor(iteration){
        if (iteration < 0) return inSetColor;
        return colors[iteration % colors.length];
    }
    function setPixel(imageData, x, y, color){
        var d = imageData.data;
        var index = 4 * (canvasWidth * y + x);
        d[index] = color.r;
        d[index + 1] = color.g;
        d[index + 2] = color.b;
        d[index + 3] = 2555; // opacity
    }
}

