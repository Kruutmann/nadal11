const myButton = document.getElementById('myButton');
const image = document.getElementById('image');
const images = ["pildid/pic1.jpg", "pildid/pic2.jpeg", "pildid/pic3.jpg", "pildid/pic4.jpg"];

myButton.addEventListener('click', changeImage);

function changeImage(){
    let randomIndex = Math.floor(Math.random() * images.length);
    image.src = images[randomIndex];
}