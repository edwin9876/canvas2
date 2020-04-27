const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')
ctx.strokeStyle = 'black'
let dragging = false;
let origX, origY, mouseX, mouseY

function draw(e) {
    if (dragging) {
        [mouseX, mouseY] = [e.offsetX, e.offsetY]
        ctx.clearRect(0, 0, canvas.width, canvas.height)
//
        ctx.beginPath();
        ctx.moveTo(origX,origY);
        ctx.lineTo(mouseX,mouseY);
        ctx.stroke();
//
        ctx.beginPath();
        ctx.moveTo(mouseX,mouseY);
        ctx.lineTo(origX,(2*(mouseY-origY)+origY));
        ctx.stroke();


//
        ctx.beginPath();
        ctx.moveTo(origX,(2*(mouseY-origY)+origY));
        ctx.lineTo((2*(origX)-mouseX),mouseY);
        ctx.stroke();
//
        ctx.beginPath();
        ctx.moveTo((2*(origX)-mouseX),mouseY);
        ctx.lineTo(origX,origY);
        ctx.stroke();
   
    }}

canvas.addEventListener('mousedown', (e) => {
    dragging = true;
    [origX, origY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mousemove',
    draw
)
canvas.addEventListener('mouseup', () =>
    dragging = false
);
canvas.addEventListener('mouseout', () => dragging = false);