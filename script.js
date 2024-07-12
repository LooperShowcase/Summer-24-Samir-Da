function realPic() {
  let id = Math.floor((Math.random() * 6 + 1) * 10000);
  return `https://whichfaceisreal.blob.core.windows.net/public/realimages/${id}.jpeg`;
}

let fakePic = "https://thispersondoesnotexist.com/";

function game() {
  let imagescontanier = document.getElementById("images");
  let resultcontanier = document.getElementById("results");
  let streakcontanier = document.getElementById("streak");

let streak = 0;

  function draw() {
    imagescontanier.innerHTML = "";
    resultcontanier.innerHTML = "";

    let againBtn = document.createElement("button");
    againBtn.textContent = "next level!";
    againBtn.onclick = draw;

    let realOrFake = Math.random() > 0.5;
    let list = [realOrFake, !realOrFake];

    imagescontanier.style.pointerEvents = "auto"

    for (let isReal of list) {
      let img = document.createElement("img");
      img.src = isReal ? realPic() : fakePic;

      img.onclick = function(){
      imagescontanier.style.pointerEvents = "none";
   resultcontanier.textContent = isReal ? "touch grass bruh!!!" : "ur not worthy";

   streak = isReal ? streak + 1 : 0;
   streakcontanier.innerHTML = "streak: " + streak;

   resultcontanier.appendChild(againBtn)

      }
      
      
      
      imagescontanier.appendChild(img);
    }
  }

  draw();
}

game();
