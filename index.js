for(var n=0;n<7;n++){document.querySelectorAll(".piano")[n].addEventListener("click",function(){
    var buttonInner=this.innerHTML;
    makeSound(buttonInner);
    animation(buttonInner);

});

}
document.addEventListener("keydown",function(a){
    makeSound(a.key);
    animation(a.key);
});

function makeSound(b){
    switch(b){


            case "s" :
            var sa = new Audio("./sound/1do.mp3");
            sa.play();
            break;

            case "r" :
            var re = new Audio("./sound/2ri.mp3");
            re.play();
            break;

            case "g" :
            var ga = new Audio("./sound/3mi.mp3");
            ga.play();
            break;

            case "m" :
            var ma = new Audio("./sound/4fa.mp3");
            ma.play();
            break;

            case "p" :
            var pa = new Audio("./sound/5so.mp3");
            pa.play();
            break;

            case "d" :
            var dha = new Audio("./sound/6la.mp3");
            dha.play();
            break;

            case "n" :
            var ni = new Audio("./sound/7ti.mp3");
            ni.play();
            break;
    }
}

function animation(currentKey){
    var activeButton=document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}