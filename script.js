var current=document.querySelector('.previous');
var next=document.querySelector('.next');
var valInput="";
var interval;
var ctr=0;
var keycounter=document.getElementsByTagName('button');
keycounter[0].addEventListener('click',startCounter);
function startCounter(){
  valInput=parseInt(document.getElementById('value-box').value);
  interval=setInterval(loop,1000);
  current.innerText=0;
  next.innerText=0;
}
function loop(){
  if(ctr<valInput){
    ctr++;
    animate(ctr);

  } else if(ctr==valInput){
    clearInterval(interval);
    ctr=0;
  }
}
function animate(i){
  next.classList.add('animate');
  next.innerText=i;
    setTimeout(function(){
      next.classList.remove('animate');
    },500);
    setTimeout(function(){
      current.innerText=i;
    },500);
}
