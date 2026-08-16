

🐦 Bird Flying Game
A simple browser-based Bird Flying Game inspired by the classic Flappy Bird concept. The player controls a bird and must keep it flying while avoiding randomly generated green pipe obstacles.

The project is built using only HTML, CSS, and JavaScript, with no external libraries or frameworks.

Deployment : https://bird-flying-game.vercel.app/

🎮 Game Features
Bird movement using gravity.

Press Spacebar to make the bird jump upward.

Pipes are generated automatically every 2 seconds.

Pipe positions are randomized to create different gaps.

Pipes move from right to left.

Collision detection between the bird and pipes.

Game-over detection when the bird moves outside the game area.

Game automatically reloads after game over.

Pipes are removed from the DOM after leaving the screen.

🛠️ Technologies Used
HTML5 – Creates the game structure.

CSS3 – Styles and positions the game, bird, and pipes.

JavaScript – Controls gravity, jumping, pipe generation, movement, collision detection, and game-over logic.

📁 Project Structure
Bird-Flying-Game/
│
├── index.html
├── style.css
├── script.js
├── bird-removebg-preview.png
└── README.md
Note: The HTML currently references the bird image as /bird-removebg-preview.png. Make sure this image is available at the expected path, or change the src in index.html to match your image location.

▶️ How to Run
Download or clone the project.

Keep index.html, style.css, script.js, and the bird image in the correct locations.

Open index.html in a browser.

For the best development experience, use VS Code with Live Server.

Press the Spacebar to control the bird.

🕹️ Controls
Action	Control
Jump / Fly Up	Spacebar
Gravity	Automatic
Restart	Automatic after Game Over
⚙️ How the Game Works
1. Bird Movement
The JavaScript maintains the bird's vertical position using birdtop. Gravity continuously increases this value, moving the bird downward.

let birdtop = 200;
let gravity = 3;
The bird position is updated repeatedly using setInterval().

2. Bird Jump
When the player presses the Spacebar, the bird's vertical position is decreased:

if (e.code === "Space") {
    birdtop -= 60;
}
This creates the upward jump effect.

3. Pipe Generation
A pair of pipes is created every 2 seconds. The top pipe and bottom pipe are given a random height while maintaining a fixed gap between them.

const gap = 350;
The pipes start from the right side of the game area and move toward the left.

4. Pipe Movement
Every pipe moves approximately 2 pixels per update:

pipeLeft -= 2;
The movement runs repeatedly until the pipe leaves the screen or the game ends.

5. Collision Detection
The game uses getBoundingClientRect() to obtain the positions of the bird and pipes.

The collision logic checks:

Horizontal overlap between the bird and pipe.

Whether the bird enters the top pipe area.

Whether the bird enters the bottom pipe area.

If a collision occurs, gameover() is called.

6. Boundary Detection
The game also checks whether the bird goes above or below the game area:

if (birdtop > game.clientHeight || birdtop < 0) {
    gameover();
}
7. Game Over
When the game ends:

function gameover() {
    isgameover = true;
    alert("Your game is Over");
    location.reload();
}
The game is stopped, an alert is displayed, and the page reloads to start a new game.

🎨 Current Design
The game area:

Uses approximately 80% width and 90% height of the viewport.

Has a light blue background.

Uses a bird image positioned absolutely inside the game area.

Uses green rectangular pipes as obstacles.

Hides objects that move outside the game area.

📌 Current Game Configuration
Setting	Value
Game Width	80%
Game Height	90%
Bird Height	80px
Initial Bird Position	200px
Gravity	3
Jump Amount	60px
Pipe Gap	350px
Pipe Width	70px
Pipe Speed	2px/update
Pipe Spawn Interval	2 seconds
Game Update Interval	20ms
🚀 Possible Improvements
The current version is a functional basic game. The following features can be added later:

Score counter.

High-score system using localStorage.

Start / Pause / Restart buttons.

Game-over screen instead of alert().

Sound effects.

Background music.

Bird animation.

Different pipe designs.

Increasing difficulty over time.

Mobile/touch controls.

Responsive sizing for smaller screens.

Better collision tolerance.

Start screen and instructions.

Game speed control.

🧠 Learning Outcomes
This project is useful for practicing:

DOM selection and manipulation.

JavaScript event listeners.

setInterval().

CSS absolute positioning.

Random number generation with Math.random().

Collision detection.

Browser coordinates using getBoundingClientRect().

Dynamic DOM element creation.

Removing elements from the DOM.

Basic game-loop concepts.

Managing game state with variables.

📄 Source Files
index.html
Defines the game container, bird image, CSS file, and JavaScript file.

style.css
Resets default margins/padding and styles the game area, bird, and pipes.

script.js
Contains the main game logic including bird movement, jumping, pipe generation, pipe movement, collision detection, boundary checking, and game-over handling.

👨‍💻 Author
Rinkesh Bachhav

Built as a practice project for learning HTML, CSS, JavaScript, DOM manipulation, and basic browser game development.

