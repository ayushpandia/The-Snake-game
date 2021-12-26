
game_over = false;

function init()
{
    canvas=document.getElementById("mycanvas");
    canvas.width=500;
    canvas.height=500;
    pen=canvas.getContext('2d');

    rect={
        x:20,
        y:20,
        w:40,
        h:40,
        speed:20
    }
}

function draw()
{
    pen.clearRect(0,0,canvas.width, canvas.height);
    pen.fillStyle ="red";
    pen.fillRect(rect.x, rect.y, rect.w, rect.h);
}

function update()
{
    rect.x += rect.speed;
    if((rect.x + rect.w)> canvas.width || (rect.x<0))
        rect.speed*=-1;
}

function gameloop()
{
    if (game_over == true)
        clearInterval(f);
    draw();
    update();
}


init();
var f =  setInterval(gameloop, 100);