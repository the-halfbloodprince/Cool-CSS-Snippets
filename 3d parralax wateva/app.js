//movement animation to happen
const card=document.querySelector('.card');
const container=document.querySelector('.container');
const title=document.querySelector('.title');
const cq=document.querySelector('.cq img');
const buttons=document.querySelector('.buttons');
const mainbutton=document.querySelector('.finalbutton button');
const descr=document.querySelector('.info h3');

container.addEventListener('mousemove',(e)=>{
    let axisX=(window.innerWidth/2 - e.pageX)/25;
    let axisY=(window.innerHeight/2 - e.pageY)/25;
    card.style.transform=`rotateX(${axisY}deg) rotateY(${axisX}deg)`;
})

container.addEventListener('mouseenter',(e)=>{
    card.style.transition='none';
    title.style.transform='translateZ(70px)';
    cq.style.transform='translateZ(100px) rotateZ(5deg) scale(1.3)';
    buttons.style.transform='translateZ(100px)';
    mainbutton.style.transform='translateZ(100px)';
    descr.style.transform='translateZ(100px)';
})

container.addEventListener('mouseleave',()=>{
    card.style.transition='all 0.5s ease';
    card.style.transform=`rotateX(0) rotateY(0)`;
    title.style.transform='translateZ(0px)';
    cq.style.transform='translateZ(0px) rotateZ(0deg) scale(1)';
    buttons.style.transform='translateZ(0)';
    mainbutton.style.transform='translateZ(0)';
    descr.style.transform='translateZ(0)';
})