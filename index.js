
var randomnumber1= Math.random()*6
randomnumber1=Math.floor(randomnumber1)+1

var imageSource ="images/dice"+randomnumber1+".png"
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", imageSource);

var randomnumber2= Math.random()*6
randomnumber2=Math.floor(randomnumber2)+1

var imageSource2 ="images/dice"+randomnumber2+".png"
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", imageSource2);


//If player 1 wins
if (randomnumber1 > randomnumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Win";
  }
  else if (randomnumber2 > randomnumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Win 🚩";
  }
  else {
    document.querySelector("h1").innerHTML = "Draw!";
  }