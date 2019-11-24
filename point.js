class point
{
  constructor(x , y )
  {
    this.x = x;
    this.y = y;
  }

  drawPoint(ctx)
  {
    var cvs  = document.getElementById("mycanvas");
    var ctx = cvs.getContext('2d');

    ctx.beginPath();
    ctx.fillStyle = "#17202A";
    ctx.fillRect(this.x , this.y, 1, 1);
    ctx.fill();
    ctx.closePath();
    ctx.stroke();
    }
}