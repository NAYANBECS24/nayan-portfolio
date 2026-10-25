import { type ReactNode, useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, type Variants } from 'framer-motion';

export function FadeIn({children,delay=0,duration=0.7,x=0,y=30,className=''}:{children:ReactNode,delay?:number,duration?:number,x?:number,y?:number,className?:string}) {
 const variants:Variants={hidden:{opacity:0,x,y},visible:{opacity:1,x:0,y:0,transition:{duration,delay,ease:[0.25,0.1,0.25,1]}}};
 return <motion.div className={className} variants={variants} initial="hidden" whileInView="visible" viewport={{once:true,margin:'50px',amount:0}}>{children}</motion.div>
}

export function Magnet({children,padding=150,strength=3,className=''}:{children:ReactNode,padding?:number,strength?:number,className?:string}){
 const ref=useRef<HTMLDivElement>(null);
 const [point,setPoint]=useState({x:0,y:0});const [active,setActive]=useState(false);
 useEffect(()=>{
  if(!window.matchMedia('(pointer:fine)').matches)return;
  const handler=(event:MouseEvent)=>{
   const r=ref.current?.getBoundingClientRect();if(!r)return;
   const inZone=event.clientX>=r.left-padding&&event.clientX<=r.right+padding&&event.clientY>=r.top-padding&&event.clientY<=r.bottom+padding;
   setActive(inZone);
   if(inZone)setPoint({x:(event.clientX-(r.left+r.width/2))/strength,y:(event.clientY-(r.top+r.height/2))/strength});
   else setPoint({x:0,y:0});
  };
  window.addEventListener('mousemove',handler,{passive:true});return()=>window.removeEventListener('mousemove',handler);
 },[padding,strength]);
 return <div className={className} ref={ref} style={{transform:`translate3d(${point.x}px,${point.y}px,0)`,transition:active?'transform .3s ease-out':'transform .6s ease-in-out',willChange:'transform'}}>{children}</div>
}

function Char({c,i,length,progress}:{c:string,i:number,length:number,progress:ReturnType<typeof useScroll>['scrollYProgress']}){
 const start=i/length*.85;const end=Math.min(1,start+.13);
 const opacity=useTransform(progress,[start,end],[.17,1]);return <motion.span style={{opacity}}>{c}</motion.span>;
}
export function AnimatedText({text}:{text:string}){
 const ref=useRef<HTMLParagraphElement>(null);
 const {scrollYProgress}=useScroll({target:ref,offset:['start 0.8','end 0.2']});
 return <p ref={ref} className="about-animated-text">{Array.from(text).map((c,i)=><Char key={i} c={c} i={i} length={text.length} progress={scrollYProgress}/>)}</p>
}
