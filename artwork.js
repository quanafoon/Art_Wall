let pos = 0;
let down = true;
let scrolling = false;
let scrollTimeout = null;
let before = document.documentElement.scrollTop;
let stop = false;
let control = document.getElementById("pause-play");
let nav = Array.from(document.getElementsByClassName("nav"));
nav[0].style.position = "fixed";

const bar = document.getElementById("nav-bar");
const art1 = document.getElementById("art-1");
let startHeight = bar.scrollHeight + 30;
art1.style.marginTop = startHeight + "px";

document.addEventListener("scroll", function(){
    scrolling = true;
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        scrolling = false;
        pos = document.documentElement.scrollTop;
        if(before < pos)
            down = true;
        else
            down = false;
        before = pos;
    }, 20);
});


function scroll() {
    if(!scrolling && !stop){
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

        if (pos >= maxScroll) {
            down = false;
        } else if (pos <= 0) {
            down = true;
        }

        pos += down ? 1 : -1;

        window.scrollTo(0, pos);
    }
    requestAnimationFrame(scroll);
};

requestAnimationFrame(scroll);

function pause_play(){
    stop = !stop;
    if(stop)
        control.innerHTML = "play_circle"
    else
        control.innerHTML = "pause_circle";
    control.classList.add("pulse");
    setTimeout(function(){
        control.classList.remove("pulse");
    }, 1000);   
}