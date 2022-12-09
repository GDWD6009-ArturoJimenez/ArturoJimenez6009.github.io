let starter = document.getElementById("starter")

let heartArray = ["assest/image/Asset20.png", "assest/image/Asset21.png", "assest/image/Asset22.png", "assest/image/Asset23.png", "assest/image/Asset24.png", "assest/image/Asset25.png", "assest/image/Asset26.png", "assest/image/Asset27.png"]

let count = 0;

function animate(){
  starter.src = heartArray [count];
  count++;
  if (heartArray.length == count) {
  count = 0
  }
}

setInterval (animate, 100)