let nav = Array.from(document.getElementsByClassName("nav"))[0];
nav.style.position = "absolute";

const el = document.querySelector('.tabs');
const options = {
    swipeable: true
};
M.Tabs.init(el, options);

const imageSection = document.getElementById("home-images");
const active = document.getElementById("active");
imageSection.addEventListener("click", function() {
    window.location.href = "artwork.html";
});


const images = ["lake.jpg", "boat.jpg", "paris.jpg"];
var count = 0;
const max = images.length-1;
function switch_image(){
    if(count == max)
        count=0;
    else
        count++;
    active.src="images/"+images[count];
}


setInterval(switch_image, 5000);