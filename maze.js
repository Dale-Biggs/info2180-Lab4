"use strict";
window.onload= function(){
  var elemStart= document.getElementById('start');
  var myBoundary1=document.getElementById('boundary1');
  var myBoundary=document.getElementsByClassName('boundary');
  var elemEnd=document.getElementById('end');
  var status=document.getElementById('status');
  var maze=document.getElementById("maze");

  maze.onmouseleave=function(){
    if (status.innerHTML=="You Win!"){

    }else{
      for(var element=0; element<myBoundary.length-1;element++){
        myBoundary[element].classList.add("youlose");
          status.innerHTML="You Lose!";
      }
    }
  }

  elemStart.onmouseover= function borderContact(){
      for(var i=0; i<myBoundary.length-1;i++){
        myBoundary[i].addEventListener("mouseover", function(){
          if (status.innerHTML=="You Win!"){

          }else{
            for(var elem=0; elem<myBoundary.length-1;elem++){
              myBoundary[elem].classList.add("youlose");
              status.innerHTML="You Lose!";
            }
          }
        });
      }
  }

  elemEnd.onmouseover=function(){
    if (myBoundary[1].classList[1]=="youlose"){

    }else{
      status.innerHTML="You Win!";
    }
  }

  elemStart.onclick=function(){
    for (var elem=0; elem<myBoundary.length-1; elem++){
      if(myBoundary[elem].classList[1]=="youlose"){
        myBoundary[elem].classList.remove("youlose");
        status.innerHTML="Move your mouse over the 'S' to begin.";
      }else{
        status.innerHTML="Move your mouse over the 'S' to begin.";
      }
    }
  }

}
