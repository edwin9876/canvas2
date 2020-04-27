$(".section1 .row1 .icon:eq(1)").on("click", function () {
    currentFunction = new Dragger(ctxD, ctxR);
  })

class Dragger extends PaintFunc{
    constructor(ctxR,ctxD){
        super();
        this.ctxR = ctxR;
        this.ctxD = ctxD;
    }

   onDrag(coord,coord2,e,rgb) {
    [coord2[0], coord2[1]] = [e.offsetX, e.offsetY]
    dragger(ctxD,ctxD,coord,coord2,rgb)
    }

   onMu(coord,coord2,e,rgb) {
    dragger(ctxR,ctxD,coord,coord2,rgb)    
    }
 
}

function dragger(ctx,ctxD,coord,coord2,rgb){
    ctxD.clearRect(0, 0, canvasD.width, canvasD.height)
    ctx.clearRect(0,0,100,100)
    ctx.putImageData(imgData,20,20)
    ctxD.stroke();
    console.log(origX2)

}