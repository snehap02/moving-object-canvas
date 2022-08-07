const canvas = document.getElementById("canvasApi");
const ctx = canvas.getContext('2d');

//move any object inside a canvas
const grabImg = document.getElementById("source");

const mario = {
    w: 80,
    h: 70,
    x: 20,
    y: 200,
    speed: 5,
    dx: 0,
    dy: 0
}

function drawImg(){
    //Draws an image, canvas, or video onto the canvas
    ctx.drawImage(grabImg, mario.x, mario.y, mario.w, mario.h);
}

function clear(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function newPositionOfPlayer(){
    mario.x += mario.dx;
    mario.y += mario.dy;

    detectWalls();
}

function detectWalls(){
    //leftWall
    if(mario.x < 0){
        mario.x = 0;
    }

    //RightWall (add the players width with the value of x)
    if(mario.x + mario.w > canvas.width){
        mario.x = canvas.width - mario.w;
    }

    //TopWall
    if(mario.y < 0){
        mario.y = 0;
    }

    //BottomWall (add the players height with the value of y)
    if(mario.y + mario.h > canvas.height){
        mario.y = canvas.height - mario.h;
    }
}

function updateImg(){
    clear();
    drawImg();

    newPositionOfPlayer();

    requestAnimationFrame(updateImg);
}

function moveUp(){
    mario.dy = -mario.speed;
}
function moveDown(){
    mario.dy = mario.speed;
}
function moveRight(){
    mario.dx = mario.speed;
}
function moveLeft(){
    mario.dx = -mario.speed;
}

function keyDown(e){
    // console.log(e.key) ---> this will give you the current key you are pressing 
    if(e.key === 'ArrowRight' || e.key === 'Right'){
        moveRight();
    }else if(e.key === 'ArrowLeft' || e.key === 'Left'){
        moveLeft();
    }else if(e.key === 'ArrowUp' || e.key === 'Up'){
        moveUp();
    }else if(e.key === 'ArrowDown' || e.key === 'Down'){
        moveDown();
    }
}

function keyUp(e){
    if(
        e.key == 'Right' ||
        e.key == 'ArrowRight' ||
        e.key == 'Left' ||
        e.key == 'ArrowLeft' ||
        e.key == 'Up' ||
        e.key == 'ArrowUp' ||
        e.key == 'Down' ||
        e.key == 'ArrowDown'
    ){
        mario.dx = 0;
        mario.dy = 0;
    }
}


updateImg();

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);