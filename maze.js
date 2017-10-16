"use strict";
window.onload= function(){
  var elemStart= document.getElementById('start');
  var myBoundary1=document.getElementById('boundary1');
  var myBoundary=document.getElementsByClassName('boundary');

  elemStart.onmouseover= function(){
    if (myBoundary1.classList[1]=="youlose"){
      myBoundary1.classList.remove("youlose");
    }else{
      border1Contact();
    }
  }

  function border1Contact(){
    myBoundary1.addEventListener("mouseover", function(){
      myBoundary1.classList.add("youlose");
      alert('You Lose');
    })
  }

}
