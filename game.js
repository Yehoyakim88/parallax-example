const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.offsetWidth;
const CANVAS_HEIGHT = canvas.offsetHeight;

let layer_1 = [];
let layer_2 = [];
let layer_3 = [];

let x_0 = 0;
let x_1 = CANVAS_WIDTH;
// let x_2 = CANVAS_WIDTH;

let movSpeed = 10;
let direction = 1;


function loadImage(path) {
    let img = new Image();
    img.src = path;

    return img;
}


function init() {
    layer_1.push(loadImage('./img/1-0.png'));
    layer_1.push(loadImage('./img/1-1.png'));
    // layer_1.push(loadImage('./img/1-1.png'));
    
    layer_2.push(loadImage('./img/2-0.png'));
    layer_2.push(loadImage('./img/2-1.png'));
    // layer_2.push(loadImage('./img/2-1.png'));

    layer_3.push(loadImage('./img/3-0.png'));
    layer_3.push(loadImage('./img/3-1.png'));
    // layer_3.push(loadImage('./img/3-1.png'));

    console.log('layer_1[0] ', layer_1[0]);
    console.log('layer_1[1] ', layer_1[1]);
    // console.log('layer_1[2] ', layer_1[2]);

    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.drawImage(layer_1[0], 0, 0);
    ctx.drawImage(layer_1[1], CANVAS_WIDTH, 0);

    setTimeout(() => {
        animate();
    }, 2000);
}


function animate() {
    setInterval(() => {
        
        

        if(direction == 1) {
            if(x_1 > CANVAS_WIDTH - movSpeed) {
                x_1 = -CANVAS_WIDTH + movSpeed;
            }
            else {
                x_1 += movSpeed * direction;
            }
    
            if(x_0 > CANVAS_WIDTH - movSpeed) {
                x_0 = -CANVAS_WIDTH + movSpeed;
            }
            else {
                x_0 += movSpeed * direction;
            }
        }

        if(direction == -1) {
            if(x_0 >= -CANVAS_WIDTH + movSpeed) {
                x_0 += movSpeed * direction;
            }
            else {
                x_0 = CANVAS_WIDTH - movSpeed;
            }

            if(x_1 >= -CANVAS_WIDTH + movSpeed) {
                x_1 += movSpeed * direction;
            }
            else {
                x_1 = CANVAS_WIDTH - movSpeed;
            }
        }

        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        ctx.drawImage(layer_1[0], x_0, -200, 1280, 640);
        ctx.drawImage(layer_1[1], x_1, -200, 1280, 640);
        
    }, 1000 / 60); 
}


function toggle() {
    if(direction == 1) {
        direction = -1;
    }
    else if(direction == -1) {
        direction = 1;
    }
}
