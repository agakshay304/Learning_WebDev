var randomint=Math.floor(Math.random()*6)+1;

var randomdice1="images/dice"+randomint+".png";

document.querySelectorAll("img")[0].setAttribute("src",randomdice1);

var randomint2=Math.floor(Math.random()*6)+1;
var randomdice2="images/dice"+randomint2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomdice2);


if(randomint2<randomint)
{
    document.querySelector("h1").innerHTML="First Dice Wins";
}
else if(randomint2>randomint)
{
    document.querySelector("h1").innerHTML="Second Dice Wins";
}
else
{
    document.querySelector("h1").innerHTML="Match tie";

}