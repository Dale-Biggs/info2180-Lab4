"use strict";
window.onload= function(){
  var elemStart= document.getElementById('start');
  var myBoundary1=document.getElementById('boundary1');
  var myBoundary=document.getElementsByClassName('boundary');


  elemStart.onmouseover= function(){
    for (var elem=0; elem<myBoundary.length-1; elem++){
      if(myBoundary[elem].classList[1]=="youlose"){
        myBoundary[elem].classList.remove("youlose");
      }else{
        borderContact();
      }
    }
  }

  function borderContact(){
    for(var i=0; i<myBoundary.length-1;i++){
      myBoundary[i].addEventListener("mouseover", function(){
        for(var elem=0; elem<myBoundary.length-1;elem++){
          myBoundary[elem].classList.add("youlose");
        }
      });
    };
  }

  /*function border1Contact(){
    myBoundary1.addEventListener("mouseover", function(){
      myBoundary1.classList.add("youlose");
      alert('You Lose');
    })
  }*/

  }
