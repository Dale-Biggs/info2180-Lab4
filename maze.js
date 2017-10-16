"use strict";
window.onload= function(){
  var elemStart= document.getElementById('start');
  var myBoundary1=document.getElementById('boundary1');
  var myBoundary=document.getElementsByClassName('boundary');
  var elemEnd=document.getElementById('end');


  elemStart.onmouseover= function(){
        borderContact();
  }

  function borderContact(){
    for(var i=0; i<myBoundary.length-1;i++){
      myBoundary[i].addEventListener("mouseover", function(){
        for(var elem=0; elem<myBoundary.length-1;elem++){
          myBoundary[elem].classList.add("youlose");
        }
      });
    }
  }

  elemEnd.onmouseover=function(){
    if (myBoundary[1].classList[1]=="youlose"){
      alert('Go back cheater!');
    }else{
      alert('You win!');
    }
  }

  elemStart.onclick=function(){
    for (var elem=0; elem<myBoundary.length-1; elem++){
      if(myBoundary[elem].classList[1]=="youlose"){
        myBoundary[elem].classList.remove("youlose");
      }
    }
  }
}
