var n=document.querySelectorAll(".drum").length;

for(var i=0;i<n;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function()
    {
        var buttonp=this.innerHTML;

        onpressed(buttonp);
        onanimation(buttonp);
    })
}

document.addEventListener("keypress",function(event){
    onpressed(event.key);
    onanimation(event.key);
})


function onpressed(key)
{
    switch (key) {
        case 'w':
                var tom1=new Audio("sounds/tom-1.mp3");
                tom1.play();
            break;
        case 'a':
        var tom2=new Audio("sounds/tom-2.mp3");
                tom2.play();
            break;
        case 's':
            var tom3=new Audio("sounds/tom-3.mp3");
                tom3.play();
            break;
        case 'd':
            var tom4=new Audio("sounds/tom-4.mp3");
                tom4.play();
            break;
        case 'j':
            var snake=new Audio("sounds/snare.mp3");
                snake.play();
            break;
        case 'k':
            var kick=new Audio("sounds/kick-bass.mp3");
                kick.play();
            break;
        case 'l':
            var crash=new Audio("sounds/crash.mp3");
                crash.play();
            break;
        default:this.innerHTML(buttonp);
            break;
    }
}

function onanimation(key)
{
    var activebutton=document.querySelector("."+key);
    activebutton.classList.add("pressed");

    setTimeout(function()
    {
        activebutton.classList.remove("pressed");
    },100);
}