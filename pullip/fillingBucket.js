$(".section2 .row1 .icon:eq(-1)").on("click", function () {
  currentFunction = new FillBucket(ctxD, ctxR);
})
class FillBucket extends PaintFunc{
    constructor(ctxR,ctxD){
        super();
        this.ctxR = ctxR;
        this.ctxD = ctxD;}

 onMd (coord,fillColor,startRGB){
    pixelStack = [[coord[0], coord[1]]];
    canvasRData = ctxR.getImageData(0,0,canvasR.width,canvasR.height)

    origPos = coord[1]*canvasR.width+coord[0] * 4
    startR = canvasRData.data[origPos]
    startG = canvasRData.data[origPos+1]
    startB = canvasRData.data[origPos+2]
while(pixelStack.length)
{
  let newPos, x, y, pixelPos, reachLeft, reachRight;
  newPos = pixelStack.pop();
  x = newPos[0];
  y = newPos[1];

  pixelPos = (y*canvasR.width + x) * 4;

  while(y-- >= 0 && matchStartColor(pixelPos))
  {
    pixelPos -= canvasR.width * 4;
  }
  pixelPos += canvasR.width * 4;
  ++y;
  reachLeft = false;
  reachRight = false;
  while(y++ < canvasR.height-1 && matchStartColor(pixelPos))
  {
    colorPixel(pixelPos);

    if(x > 0)
    {
      if(matchStartColor(pixelPos - 4))
      {
        if(!reachLeft){
          pixelStack.push([x - 1, y]);
          reachLeft = true;
        }
      }
      else if(reachLeft)
      {
        reachLeft = false;
      }
    }
	
    if(x < canvasR.width-1)
    {
      if(matchStartColor(pixelPos + 4))
      {
        if(!reachRight)
        {
          pixelStack.push([x + 1, y]);
          reachRight = true;
        }
      }
      else if(reachRight)
      {
        reachRight = false;
      }
    }
			
    pixelPos += canvasR.width * 4;
  }
}
ctxR.putImageData(canvasRData, 0, 0);
  
function matchStartColor(pixelPos)
{
  let r = canvasRData.data[pixelPos];	
  let g = canvasRData.data[pixelPos+1];	
  let b = canvasRData.data[pixelPos+2];

  return (r == startR && g == startG && b == startB);
}

function colorPixel(pixelPos)
{
  canvasRData.data[pixelPos] = fillColor[0];
  canvasRData.data[pixelPos+1] = fillColor[1];
  canvasRData.data[pixelPos+2] = fillColor[2];
  canvasRData.data[pixelPos+3] = 255;
}}}