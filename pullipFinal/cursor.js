$(".section2 .row3 .icon:eq(0)").on("click", function () {
    currentFunction = new Cursor(ctxR, ctxD);
})

class Cursor extends PaintFunc {
    constructor(ctxR, ctxD) {
        super();
        this.ctxR = ctxR;
        this.ctxD = ctxD;
    }

    onDrag(coord, coord2, e, rgb) {
        [coord2[0], coord2[1]] = [e.offsetX, e.offsetY]
        ctxD.clearRect(0, 0, canvasD.width, canvasD.height)
        if (imgData[1]) {
            cursorSelect(ctxD, coord2)
            ctxD.putImageData(imgData[1], coord2[0] - 50, coord2[1] - 50)
        }
        else {
            cursorSelect(ctxD, coord2)
            imgData.push(ctxR.getImageData(coord2[0] - 50, coord2[1] - 50, 100, 100))
            ctxR.clearRect(coord2[0] - 50, coord2[1] - 50, 100, 100)
            console.log(imgData)
        }

    }

    onMu(coord, coord2, e, rgb) {
        ctxD.clearRect(0, 0, canvasD.width, canvasD.height)
        ctxR.putImageData(imgData[1], coord2[0] - 50, coord2[1] - 50)
        imgData = new Array(1)

    }

}

function cursorSelect(ctxD, coord2) {
    ctxD.setLineDash([10, 10]);
    ctxD.beginPath()
    ctxD.rect(coord2[0] - 55, coord2[1] - 55, 110, 110)
    ctxD.stroke()
}

