let icon = document.querySelector(" .navbar i");
let sideContent = document.querySelector(" .side-content");

icon.onclick = function() {
        sideContent.classList.toggle("show");
        icon.className = "fa-solid fa-xmark";


        icon.onclick = function() {
            sideContent.classList.toggle("hide");
            icon.className = "fa-solid fa-bars";


        }


    }
    // start  about code


let conheading = document.querySelector(".conheading");
let messheading = document.querySelector(".messheading");




window.onscroll = function() {
    let conoffset = conheading.offsetTop;
    let conheight = conheading.offsetHeight;
    let messoffset = messheading.offsetTop;
    let messheight = messheading.offsetHeight;
    let windowh = this.innerHeight;
    let page = this.pageYOffset;
    let valueofcon = conoffset + conheight - windowh;
    let valueofmess = messoffset + messheight - windowh;
    if (page >= (valueofcon)) {
        conheading.style.animationPlayState = "running";
        

    if (page >= (valueofmess)) {
        messheading.style.animationPlayState = "running";

    }

}
}



// end about code