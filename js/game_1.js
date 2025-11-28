const canvas = document.getElementById("gameWindow_1");
const ctx = canvas.getContext("2d");

const screen = {
	width: 640,
	height: 360
}

canvas.width = screen.width;
canvas.height = screen.height;

ctx.fillStyle = "#008080";
ctx.fillRect(0, 0, screen.width, screen.height);