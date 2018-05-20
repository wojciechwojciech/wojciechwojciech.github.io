//Launch Canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);



var bgImage = new Image();
bgImage.onload = function () {
	
};
bgImage.src = "Assets/bg.png";

//Background image
var ready = false;
var heroImage = new Image();
heroImage.onload = function () {
	
};
heroImage.src = "Assets/stachu.png";

//Background image
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	
};
monsterImage.src = "Assets/wine.png";



// Game objects
var hero = {
	speed: 256, // movement in pixels per second
	x: 0,
	y: 0
};
var monster = {
	x: 0,
	y: 0
};
var monstersCaught = 0;


// Handle keyboard controls
var keysDown = {};

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);


// Reset the game when the player catches a monster
var reset = function () {
//	hero.x = canvas.width / 2;
//	hero.y = canvas.height / 2;
    
	// Throw the monster somewhere on the screen randomly
	monster.x = 32 + (Math.random() * (canvas.width - 64));
	monster.y = 32 + (Math.random() * (canvas.height - 64));
};


// Update game objects
var update = function (modifier) {
	if (87 in keysDown || 32 in keysDown) { // Player holding up
		hero.y -= hero.speed * modifier;
	}
	if (83 in keysDown) { // Player holding down
		hero.y += hero.speed * modifier;
	}
	if (65 in keysDown) { // Player holding left
		hero.x -= hero.speed * modifier;
        heroImage.src = "Assets/stachu.png";
	}
	if (68 in keysDown) { // Player holding right
		hero.x += hero.speed * modifier;
        heroImage.src = "Assets/stachuRight.png";
	}

	// Are they touching?
	if (
		hero.x <= (monster.x + 32)
		&& monster.x <= (hero.x + 32)
		&& hero.y <= (monster.y + 32)
		&& monster.y <= (hero.y + 32)
	) {
		++monstersCaught;
		reset();
	}
};



// Draw everything
var render = function () {

    ctx.drawImage(bgImage, 0, 0);
    ctx.drawImage(heroImage, hero.x, hero.y);
    ctx.drawImage(monsterImage, monster.x, monster.y);
	
// Score
	ctx.fillStyle = "rgb(250, 250, 250)";
	ctx.font = "24px Helvetica";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.fillText("Uzbierane flakony wina: " + monstersCaught, 32, 32);
};



// The main game loop
var main = function () {
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
	render();

	then = now;

	// Request to do this again ASAP
	requestAnimationFrame(main);
};



// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;




// Let's play this game!
var then = Date.now();
reset();
main();