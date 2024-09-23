/**===================== Player1 Logic ============================**/

var randomNumber1 =Math.floor(Math.random(1)*6)+1;

var randomImgSource1= "img/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src",randomImgSource1);

/**=================================================**/

/**========================== Player2 Logic =======================**/

var randomNumber2 =Math.floor(Math.random()*6)+1;

var randomImgSource2= "img/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImgSource2);

/**=================================================**/

/**=================== GAME LOGIC ==============================**/

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player1 Wins!"
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player2 Wins!"

}else{
    document.querySelector("h1").innerHTML="Draw!"
}

/**=================================================**/