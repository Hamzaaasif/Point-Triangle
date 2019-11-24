window.onload = myinit();
var cvs  = document.getElementById("mycanvas");
var ctx = cvs.getContext('2d');

function myinit()
{
  var p = new point(480/2 , 640/2);
  p.drawPoint(ctx);
  var p1 = new point((480/2)+1 , (640/2)+1);
  p1.drawPoint(ctx);
  var p2 = new point((480/2)+2 , (640/2)+2);
  p2.drawPoint(ctx);
  var p3 = new point((480/2)+3 , (640/2)+3);
  p3.drawPoint(ctx);

  console.log(p.x , p.y);
  console.log("Hello");
}
var tri ={};
var i = 0;

document.addEventListener('click',function(evt)
{
  //console.log("fs");

  if( i<=2 )
  {
    tri[i] = new point(getMousepos(evt).x , getMousepos(evt).y);
    console.log(tri[i].x , tri[i].y);
    i++;
    
  }
   if(i==3)
   {
     var tripoints={}
     var triP1=new point(320,160);
     tripoints[0]=triP1;
     var triP2=new point(160,320);
     tripoints[1]=triP2;
     var triP3=new point(480,320);
     tripoints[2] = triP3; 

  console.log(tri);
  var  rand = Math.round(Math.random()*2);
  console.log("Random: ", rand);
  var a = tripoints[rand];
  a.drawPoint(ctx);
  console.log(a);

  for (var  j = 0 ; j < 10000 ; j++)
  {
    rand = Math.round(Math.random()*2);
    console.log(rand);

    a.x =  (a.x + tripoints[rand].x) /2;
    a.y =  (a.y + tripoints[rand].y) /2;
    a.drawPoint(ctx);
    console.log(a.x , a.y);
  }
  i=0;
   }
 //var a = getMousepos(evt);
},true);


function getMousepos(event)
{
  var rect = cvs.getBoundingClientRect();
  var x = event.clientX - rect.left;
  var y = event.clientY - rect.top;
  return{x,y};
}