var slideImg = document.getElementById("img-slide")

var images = new Array(
    "./images/home1.jpg",
    "./images/home2.jpg",
    "./images/home3.jpg",
    "./images/home4.jpg",
    "./images/home5.jpg"
)

var len = images.length;
var i = 0;


function slider() {
    if (i > len - 1) {
        i = 0
    }
    slideImg.src = images[i]
    i++
    setTimeout('slider()', 2000)
}


const hidebutton = document.getElementById("hide")
const cancel = document.getElementById('cancel')
const menuinfo = document.querySelector('.menu')



if (hidebutton) {
    hidebutton.addEventListener('click', () => {
        menuinfo.classList.add('active')
    })
}


if (cancel) {
    cancel.addEventListener('click', () => {
        menuinfo.classList.remove('active')
    })
}



