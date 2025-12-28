//These functions will open and close the contact form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

//This Function displays the first image in the slideshow when the page loads
var slideIndex = 1;
showSlides(slideIndex);

//This Function changed the slide when the left or right arrow are clicked
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//This function changes the slide when the dots are clicked
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    //This will take all elements withe the class name "mySlides" and store them in the variable array "slides"
    var slides = document.getElementsByClassName("mySlides");
    // //This will take all elements withe the class name "dot" and store them in the variable array "dots"
    var dots = document.getElementsByClassName("dot");
    //if n (the number passed into the function) is greater than the length of the array "slides", the slidesIndex is set to 1
    if (n > slides.length) {slideIndex = 1};
    //if n (the number passed into the function) is less than 1, the slideIndex is set to the length of the array "slides"
    if (n < 1) {slideIndex = slides.length};
    //This for Loop takes each item in the arrat "slides" and sets the display to none
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    //This for loop takes each item in the array "dots" and removes "active" which removes the active styling
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    //This displays the image in the slideshow
    slides[slideIndex - 1].style.display = "block";
    //This adds the active styling to the dot associated with the image
    dots[slideIndex - 1].className += " active";
}

//This code will create close the contact form when the use clicks off of it. The First is to add an event
//listner for any clicks on the website
document.addEventListener("click", function(event){
//Here we state that if the click happens on the cancel button or anywhere that is not the contact form AND the click does not happen on any element with the contact class then call the closeForm() function
if (event.target.matches(".cancel") || !event.target.closest(".form-popup") && !event.target.closest(".Pop_Up_Button") && !event.target.closest(".contact")){
    closeForm()
}
}, false)