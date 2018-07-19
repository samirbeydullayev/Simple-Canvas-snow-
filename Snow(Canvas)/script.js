
// main

var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;



var snow = 1000;
var snowArr = [];
var img = document.getElementById("img");



function canvasPaint() {
    context.drawImage(img, 0, 0, canvas.width, canvas.height);

}


function Snowy() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;

    this.r = (Math.random() * 3) + 1;

    this.vy = (Math.random() * 2) + 1;
    this.vx = -2 + Math.random() * 2 + 1,


        this.draw = function () {
            context.fillStyle = "white";
            context.beginPath();
            context.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
            context.fill();
        }

}

for (var i = 0; i < snow; i++) {
    snowArr.push(new Snowy())
}

function draw() {

    canvasPaint();

    for (var i = 0; i < snowArr.length; i++) {
        p = snowArr[i]
        p.draw()
    }

    update()

}


function update() {
    for (var i = 0; i < snowArr.length; i++) {

        var p = snowArr[i];
        p.y += p.vy
        p.x += p.vx

        if (p.x + p.r > canvas.width) {
            p.x = Math.random() * canvas.width;
        }


        if (p.y + p.r > canvas.height) {
            p.y = 0
        }
    }


}


function animatloop() {
    draw();
    requestAnimationFrame(animatloop)
}
animatloop()