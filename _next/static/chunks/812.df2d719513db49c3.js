"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[812],{4812:function(t,i,e){e.r(i);var n=e(4136);i.default=class{createCanvas(){this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),this.canvas.style.display="block",this.canvas.width=this.width,this.canvas.height=this.height,this.canvas.style.position="fixed",this.canvas.style.top="0",this.canvas.style.left="0";let t=document.getElementById(this.id);t&&t.appendChild(this.canvas)}createPoints(){let{width:t,height:i}=this;for(let e=0;e<t;e+=t/20)for(let n=0;n<i;n+=i/20){let s=e+Math.random()*t/20,a=n+Math.random()*i/20,h={x:s,originX:s,y:a,originY:a};this.points.push(h)}for(let t=0;t<this.points.length;t++){let i=[],e=this.points[t];for(let n=t+1;n<this.points.length;n++){let t=this.points[n],s=!1;for(let e=0;e<5;e++)s||void 0!==i[e]||(i[e]=t,s=!0);for(let n=0;n<5;n++)!s&&this.getDistance(e,t)<this.getDistance(e,i[n])&&(i[n]=t,s=!0)}e.closest=i,e.radius=2+2*Math.random(),this.shakePoint(e)}}shakePoint(t){n.iC.to(t,1+1*Math.random(),{x:t.originX-50+100*Math.random(),y:t.originY-50+100*Math.random(),ease:n.zO.easeInOut,onComplete:()=>{this.shakePoint(t)}})}drawPoint(t,i){t.pointActive&&(i.beginPath(),i.arc(t.x,t.y,t.radius,0,2*Math.PI,!1),i.fillStyle="rgba(".concat(this.theme,",")+t.pointActive+")",i.fill())}drawLines(t,i){if(t.lineActive)for(let e of t.closest)i.beginPath(),i.moveTo(t.x,t.y),i.lineTo(e.x,e.y),i.strokeStyle="rgba(".concat(this.theme,",")+t.lineActive+")",i.stroke()}themeChange(t){this.theme=t,this.start()}getDistance(t,i){return Math.pow(t.x-i.x,2)+Math.pow(t.y-i.y,2)}handleResize(){this.width=window.innerWidth,this.height=window.innerHeight,this.canvas.width=this.width,this.canvas.height=this.height}handleMouseMove(t){let i=0,e=0;i=t.clientX,e=t.clientY,this.target.x=i,this.target.y=e}init(){this.createCanvas(),this.createPoints(),this.start(),window.onresize=t=>this.handleResize(t),window.onmousemove=t=>this.handleMouseMove(t)}start(){let{width:t,height:i,getDistance:e,points:n,ctx:s,target:a,requestAnimationFrame:h}=this;for(let h of(this.ctx.clearRect(0,0,t,i),n))4e3>Math.abs(e(a,h))?(h.lineActive=.3,h.pointActive=.6):2e4>Math.abs(e(a,h))?(h.lineActive=.1,h.pointActive=.3):4e4>Math.abs(e(a,h))?(h.lineActive=.02,h.pointActive=.1):(h.lineActive=0,h.pointActive=0),this.drawLines(h,s),this.drawPoint(h,s);this.myReq=h(()=>this.start())}destory(){let t=this.cancelAnimationFrame;t(this.myReq),window.onresize=null,window.onmousemove=null}constructor(t,i){this.id=t,this.width=window.innerWidth,this.height=window.innerHeight,this.points=[],this.target={},this.canvas=null,this.ctx=null,this.theme=i,this.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,this.cancelAnimationFrame=window.cancelAnimationFrame||window.mozCancelAnimationFrame}}}}]);