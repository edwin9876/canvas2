$(".section2 .row2 .icon:eq(1)").on("click", function () {
    currentFunction = new Spray(ctxD, ctxR);
  })

  let density = 200;
  let timeout
class Spray extends PaintFunc {
    constructor(ctxR, ctxD) {
        super();
        this.ctxR = ctxR;
        this.ctxD = ctxD;
    }

    onDrag(coord, coord2, e,rgb) {
        [coord2[0], coord2[1]] = [e.offsetX, e.offsetY]
         timeout = setTimeout(function draw() {
            for (let i = density; i--;) {
              let radius = 40;
              let offsetX = getRandomInt(-radius, radius);
              let offsetY = getRandomInt(-radius, radius);
              ctxR.fillRect(offsetX + coord2[0], offsetY + coord2[1], 1, 1);
            }
          }, 100);
    }
 
    onMu(coord, coord2, e,rgb) {
        // clearTimeout(timeout);
    }

}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }