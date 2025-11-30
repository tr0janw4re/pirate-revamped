const canvas = document.getElementById("gameWindow_1");
const ctx = canvas.getContext("2d");

const screen = {
	width: 800,
	height: 480
}

/*
	black like - #332C50
	i love red - #46878
	F
	i dunno the name - #94E344
	almost white - #E2F3E4
*/

canvas.width = screen.width;
canvas.height = screen.height;

ctx.fillStyle = "#94E344";
ctx.fillRect(0, 0, screen.width, screen.height);

//the browser window will be made using a square
//wont be a sprite