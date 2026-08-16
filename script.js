const bird = document.querySelector(".bird");
const game = document.querySelector(".game");

let birdtop = 200;
let gravity = 3;
let isgameover = false;


// Bird movement
setInterval(() => {
  if (isgameover) return;

  birdtop += gravity;
  bird.style.top = birdtop + "px";

    
    
    if(birdtop>game.clientHeight || birdtop <0 )
      {gameover()}

}, 20);

// Bird jump
document.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    birdtop -= 60;
  }
});

// Create pipe
function createpipe() {
  const pipeTop = document.createElement("div");
  const pipeBottom = document.createElement("div");

  pipeTop.classList.add("pipe");
  pipeBottom.classList.add("pipe");

  const gap = 350;

  const gameheight = game.clientHeight;
  const gameWidth = game.clientWidth;

  // Random height for top pipe
  const maxTopHeight = gameheight - gap - 50;
  const topheight = Math.random() * (maxTopHeight - 50) + 50;

  // Correct bottom pipe height
  const bottomheight = gameheight - topheight - gap;

  pipeTop.style.height = topheight + "px";
  pipeBottom.style.height = bottomheight + "px";

  pipeTop.style.top = "0px";
  pipeBottom.style.bottom = "0px";

  // Start pipes from right side
  pipeTop.style.left = gameWidth + "px";
  pipeBottom.style.left = gameWidth + "px";

  game.append(pipeTop, pipeBottom);

  let pipeLeft = gameWidth;

  const move = setInterval(() => {
    if (isgameover) {
      clearInterval(move);
      return;
    }

    pipeLeft -= 2;

    pipeTop.style.left = pipeLeft + "px";
    pipeBottom.style.left = pipeLeft + "px";

    // Collision detection
    const birdReact = bird.getBoundingClientRect();
    const topReact = pipeTop.getBoundingClientRect();
    const bottomReact = pipeBottom.getBoundingClientRect();
 
    
    if (
      birdReact.right > topReact.left &&
      birdReact.left < topReact.right &&
      (
        birdReact.top < topReact.bottom ||
        birdReact.bottom > bottomReact.top
      )
    ) {
      gameover();
      clearInterval(move);
    }

    // Remove pipe after leaving screen
    if (pipeLeft < -70) {
      pipeTop.remove();
      pipeBottom.remove();
      clearInterval(move);
    }
  }, 20);
}

// Create pipe every 2 seconds
setInterval(() => {
  if (!isgameover) {
    createpipe();
  }
}, 2000);

// Game over
function gameover() {
  isgameover = true;
  alert("Your game is Over");
  location.reload();
}