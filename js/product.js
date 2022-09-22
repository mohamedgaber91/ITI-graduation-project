// 
// 
// start  products
let prevBtn = document.getElementById("prevBtn");
let closeBtn = document.getElementById("closeBtn");
let nextBtn = document.getElementById("nextBtn");
let lightBoxItem = document.getElementById("lightBoxItem");
let lightBoxContainer = document.getElementById("lightBoxContainer");
let imageOfLightBox = document.getElementById("imageOfLightBox");
let images = Array.from(document.querySelectorAll(".products .container .cards .card .image img"));
var index;

// show the image

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("click", function(e) {
        index = images.indexOf(e.target);
        lightBoxContainer.style.display = "flex";
        var imgSrc = e.target.src;
        imageOfLightBox.setAttribute("src", `${imgSrc}`);
    })
}

nextBtn.addEventListener('click', function() {
    index++;
    if (index == images.length) {
        index = 0;
    }
    imgSrc = images[index].getAttribute("src");
    imageOfLightBox.setAttribute("src", `${imgSrc}`);

})
prevBtn.addEventListener('click', function() {
    index--;
    if (index == 0) {
        index = images.length - 1;
    }
    imgSrc = images[index].getAttribute("src");
    imageOfLightBox.setAttribute("src", `${imgSrc}`);

})
closeBtn.addEventListener('click', function() {
    lightBoxContainer.style.display = "none";
})