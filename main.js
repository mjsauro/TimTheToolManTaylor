$( document ).ready(function() {
    
    var obj = document.createElement("audio");
    obj.src = "/Tim Allen aargh2.wav";
    obj.volume = 0.1;
    obj.autoPlay = false; 
    obj.preLoad = true;
    obj.controls = true;
    
    $("#button").click(function() {
        obj.play();
    });
});
