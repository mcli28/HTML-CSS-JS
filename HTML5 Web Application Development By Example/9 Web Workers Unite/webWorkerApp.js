function executeWorker(){
    var name = $("#your-name").val();
    var worker = new Worker("helloWorker.js");
    worker.addEventListener("message", function(event){
        $("#response").fadeIn().children("span").text(event.data);
    });
    worker.postMessage(name);
    self.addEventListener("message", function(event){
        sayHello(event.data);
    });
    function sayHello(name){
        self.postMessage("Hello, "+name);
    }
}
