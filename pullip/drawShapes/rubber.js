$(".section2 .row3 .icon:eq(-2)").on("click", function () {
    currentFunction = new Rubber(ctxR, ctxD);
})

class Rubber extends PaintFunc {
    constructor(ctxR, ctxD) {
        super();
        this.ctxR = ctxR;
        this.ctxD = ctxD;
    }

    onDrag(coord, coord2, e, rgb) {
        rubber(ctxR, coord, e, rgb)
    }

}
function rubber(ctx, coord, e, rgb) {
    ctx.beginPath()
    ctx.strokeStyle = "white"
    ctx.fillStyle = "white"
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.moveTo(coord[0], coord[1])
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [origX, origY] = [e.offsetX, e.offsetY];
}
