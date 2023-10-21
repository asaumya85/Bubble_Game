var timer=60
var hit=0
var score=0


function getHit(){
     hit=Math.floor(Math.random()*10);
    document.querySelector("#gethit").textContent=hit
}
function Blecreate(){
    var clutter="";
for(var i=1;i<=130;i++){
    var rn=Math.floor(Math.random()*10)
    clutter+=`<div class="bubble">${rn}</div>`;
}
document.querySelector("#pbtm").innerHTML=clutter;
}
function Runtimer(){
    var timeSet=setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timeval").textContent=timer;
        }
        else{
            clearInterval(timeSet);
            document.querySelector("#pbtm").innerHTML=`<h1>GAME OVER</h1>`;
            
        }
    },1000)
}
function getScore(){
    score+=10
    document.querySelector("#Score").textContent=score
}
document.querySelector("#pbtm").addEventListener("click",function(details){
    var clickNum=Number(details.target.textContent);
    if(clickNum===hit){
    getScore();
    Blecreate();
    getHit();
    }
 })


Blecreate();
Runtimer();
getHit();