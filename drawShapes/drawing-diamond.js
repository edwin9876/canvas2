class DrawDiamond extends PaintFunc{
    constructor(ctxR,ctxD){
        super();
        this.ctxR = ctxR;
        this.ctxD = ctxD;
    }

   onDrag(coord,coord2,e,rgb) {
    [coord2[0], coord2[1]] = [e.offsetX, e.offsetY]
    drawDia(ctxD,ctxD,coord,coord2,rgb)
    }

   onMu(coord,coord2,e,rgb) {
    drawDia(ctxR,ctxD,coord,coord2)
    }

    
}
function drawDia(ctx,ctxD,coord,coord2){
    ctxD.clearRect(0, 0, canvasD.width, canvasD.height)
    ctx.beginPath();
    ctx.moveTo(coord[0],coord2[0]);
    ctx.lineTo(coord2[0],coord2[1]);
    ctx.lineTo(coord[0],(2*(coord2[1]-coord2[0])+coord2[0]));
    ctx.lineTo((2*(coord[0])-coord2[0]),coord2[1]);
    ctx.lineTo(coord[0],coord2[0]);
    ctx.stroke();
    console.log(rgb)
}