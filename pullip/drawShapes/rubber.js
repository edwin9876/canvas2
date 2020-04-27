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
        rubber(ctxR, coord, e)
    }

}
function rubber(ctx, coord, e) {
    ctx.shadowBlur = 0;
    ctx.shadowColor = 'transparent';
    ctx.beginPath()
    ctx.strokeStyle = "white"
    ctx.fillStyle = "white"
    ctx.lineJoin = ctx.lineCap =  'round' 
    ctx.moveTo(coord[0], coord[1])
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [origX, origY] = [e.offsetX, e.offsetY];
}
