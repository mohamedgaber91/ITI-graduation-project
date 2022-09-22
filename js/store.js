//
//

let requestBtn = document.getElementById("requestBtn");
let typeBtn = document.getElementById("typeBtn");
let quantityBtn = document.getElementById("quantityBtn");


// console.log(requestBtn, quantityBtn, typeBtn);

requestBtn.addEventListener('click', function() {
    if (typeBtn.value == '' || quantityBtn.value == '') {
        alert("please complete all data ")
    } else {
        alert("thank you your request sent successfully")
    }
})