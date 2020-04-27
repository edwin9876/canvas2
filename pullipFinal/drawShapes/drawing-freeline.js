$(".section2 .row3 .icon:eq(1)").on("click", function () {
    currentFunction = new FreeDraw(ctxR, ctxD);
})

class FreeDraw extends PaintFunc {
    constructor(ctxR, ctxD) {
        super();
        this.ctxR = ctxR;
        this.ctxD = ctxD;
    }

    onDrag(coord, coord2, e, rgb) {
        freeDraw(ctxR, coord, e, rgb)
    }

}
function freeDraw(ctx, coord, e, rgb) {
    ctx.shadowBlur = 0;
    ctx.shadowColor = 'transparent';
    ctx.beginPath()
    ctx.strokeStyle = rgb
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.moveTo(coord[0], coord[1])
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [origX, origY] = [e.offsetX, e.offsetY];
}
