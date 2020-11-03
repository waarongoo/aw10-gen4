
   function randomImage(){
  var images = [
   '[winaero.com] Lock Screen #03.jpg',
   '[winaero.com] Lock Screen #24.jpg',
   'https://download.unsplash.com/photo-1429277005502-eed8e872fe52'];
  var size = images.length;
  var x = Math.floor(size * Math.random());
  console.log(x);
  var element = document.getElementsByClassName('home-intro');
  console.log(element);
  element[0].style["background-image"] = "url("+ images[x] + ")";
}

document.addEventListener("DOMContentLoaded", randomImage);                  