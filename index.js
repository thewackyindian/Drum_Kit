//usage of addEventListener fucntion
//link to read  : https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
var total = document.querySelectorAll(".drum").length;
for (let i = 0; i < total; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var option = this.innerHTML;
        letsplay(option);
        animate(option);
    });
    document.addEventListener("keypress", function (evt) {
        letsplay(evt.key);
        animate(evt.key);
    });


}
function letsplay(option) {
    switch (option) {
        case "w":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case "m":
            var audio = new Audio('sounds/yoyo.mp3');
            audio.play();
            break;
        default: console.log(option);

    }
}
function animate(option) {
    document.querySelector("." + option).classList.add("pressed");
    setTimeout(function () {
        document.querySelector("." + option).classList.remove("pressed")
    }, 100)
}