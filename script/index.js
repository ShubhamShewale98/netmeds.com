document.querySelector(".fa-angle-down").addEventListener("click",popbox)
function popbox(){
    Box = document.getElementById("box")
    Box.style.display = "block"
}



//  auto slide 
var slideIndex = 0;
showSlides();

function showSlides() {
  var slides = document.getElementsByClassName("slide")
  bullet = document.getElementById("bullet-slide")
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 12 seconds
}