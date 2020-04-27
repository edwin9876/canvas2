$(".section2 .row2 .icon:eq(-1)").on("click", function () {
  currentFunction = new Stamp(ctxD, ctxR);
})
class Stamp extends PaintFunc {
  constructor(ctxD, ctxR) {
      super();
      this.ctxR = ctxR;
      this.ctxD = ctxD;
  }
onMd(coord,e) {
  stamp(ctxR,coord,e)}}

function stamp(ctx,coord,e) {
  var img = document.getElementById("stamplogo");
  console.log(img)
  ctx.drawImage(img, coord[0]-100, coord[1]-100);
}


