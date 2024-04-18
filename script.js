//創建一個圓形對象並製作動畫。
const canvas=document.querySelector("#circle-effect");
const ctx=canvas.getContext("2d");
// 將畫布的寬度和高度設置爲窗口的寬度和高度。
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function Circle(x,y,radius,color){
  this.x=x;
  this.y=y;
  this.radius=radius;
  this.color=color;
  this.cx=Math.floor(Math.random()*4)+1; //{1,2,3,4} :在x軸上進行隨機移動。
  this.cy=Math.floor(Math.random()*4)+1; //在y軸上進行隨機移動。
 
  this.draw=function(){
    ctx.beginPath();
    ctx.fillStyle=this.color;
    ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,true);
    ctx.fill();
  };

  this.animate=function(){
    this.x+=this.cx;
    this.y+=this.cy;
    this.draw();
  } 
}
//將創建的Circle對象添加到數組中。
const objs=[];
for(let i=0;i<20;i++){
  const radius=Math.floor(Math.random()*5)+10;
  const x=Math.random()*(canvas.width-radius*2)+radius;
  const y=Math.random()*(canvas.height-radius*2)+radius;
  const color=`rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
  //0~255 rgb(0,0,0)~(255,255,255)
  objs.push(new Circle(x,y,radius,color));
}
function update() {
  //erase canvas 
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < objs.length; i++) {
    let obj = objs[i]; 
    obj.animate();
  }
  //loop 
  requestAnimationFrame(update); 
}
//start animation 
update();
