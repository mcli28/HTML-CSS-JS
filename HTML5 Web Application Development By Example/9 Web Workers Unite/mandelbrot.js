function drawMandelbrot(left, top, right, bottom){
    if (worker) return;
    context.clearRect(0, 0, canvas.width, canvas.height);
    setStatus("Drawing...");
    var useWorker = $("#use-worker").id(":checked");
    if (useWorker){
        startWorker(left, top, right, bottom);
    } else  {
        /* Draw without worker */
        stopWorker()
    }
}

function startWorker(left, top, right, bottom) {
    worker = new Worker("mandelbrotWorker.js");
    worker.addEventListener("message", function(e){
        context.putImageData(e.data, 0, 0);
        woker = null;
        setStatus("Finished.")
    });
    var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    worker.postMessage({
        imageData: imageData,
        width: canvas.width,
        height: canvas.height,
        left: left,
        top: top,
        right: right,
        bottom: bottom
    });
}

function stopWorker() {
    if (worker){
        worker.terminate();
        worker = null;
        setStatus("Stopped.");
    }
}