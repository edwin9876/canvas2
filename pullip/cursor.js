$(".section1 .row1 .icon:eq(0)").on("click", function () {
    currentFunction = new Cursor(ctxR, ctxD);
})

  class Cursor extends PaintFunc{
    constructor(ctxR,ctxD){
        super();
        this.ctxR = ctxR;
        this.ctxD = ctxD;
    }

   onDrag(coord,coord2,e,rgb) {
       
    [coord2[0], coord2[1]] = [e.offsetX, e.offsetY]
    cursorSelect(ctxD,ctxD,coord,coord2,rgb)
 
    }

   onMu(coord,coord2,e,rgb) {
    cursorSelect(ctxR,ctxD,coord,coord2,rgb)    
     imgData = ctxR.getImageData(coord[0],coord[1],coord2[0] - coord[0], coord2[1] - coord[1])

    }
 
}

function cursorSelect(ctx,ctxD,coord,coord2,rgb){
    ctxD.clearRect(0, 0, canvasD.width, canvasD.height)
    ctxD.strokeStyle=rgb
    ctxD.setLineDash([10,10]);
    ctxD.beginPath();
    ctxD.rect(coord[0], coord[1], coord2[0] - coord[0], coord2[1] - coord[1]);
    ctxD.stroke();
    

}