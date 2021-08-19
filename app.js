// var a = prompt("what is your name?")
// var b = prompt("what is your age?")
// // let sendData = () =>{

// var obj = {
//     name : a,
//     age : b,
// }
// firebase.database().ref("student").push(obj)
// // }


// function checkForEmail() {
//      if (document.getElementsById("inputEmail4").value.length === 0) {
//      alert("Please enter your email");
//      return false;
//      }
//      }

     
function validateRadios() {
 var radios = document.getElementsByName("r1");
 for (var i = 0; i < radios.length; i++) {
 if (radios[i].checked) {
     return true;
     }
     }
     alert("Please check one.");
     return false;
     }
     function validateZIP() {
         var numChars = document.getElementById("zip").value.length;
         if (numChars < 5) {
         alert("Please enter a 5-digit code.");
         return false;
         }
         }
    

          function  showitems(){
    var img = document.getElementById('img1').src
    var price = document.getElementById('price1').innerHTML
   var model = document.getElementById('des').innerHTML
     // console.log(img,price,model)
     var cart_img = document.getElementById('img2')
   var cart_price = document.getElementById('price2')
    var cart_model = document.getElementById('descr')

    cart_img.src = img
     cart_price.innerHTML = price
    cart_model.innerHTML = model

}

   
function  load(){
  var card = document.getElementsById("img1").src
  var cards = document.getElementsById("img2")
  cards.src = card
}