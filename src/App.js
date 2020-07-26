import React, {useRef,useEffect} from 'react';
//import useAnimation from "@wellyshen/use-web-animations"
import './App.css';
//import useWebAnimations from '@wellyshen/use-web-animations';

function App() {
 const alicequeen=useRef(null);
 const forground1=useRef(null);
 const forground2=useRef(null);
 const background1=useRef(null);
 const background2=useRef(null);
useEffect(()=>{
  
 var spriteFrames = [
  { transform: 'translateY(0)' },
  { transform: 'translateY(-100%)'},   
]
var alicemovement= alicequeen.current.animate(spriteFrames,
  {
  easing: 'steps(7, end)',
  direction: "reverse",
  duration: 600,
  playbackRate: 1,
  iterations: Infinity,

})
 var sceneryFrames =   [
  { transform: 'translateX(100%)' },
  { transform: 'translateX(-100%)' }   
];

var sceneryTimingBackground = {
  duration: 36000,
  iterations: Infinity
};

var sceneryTimingForeground = {
  duration: 12000,
  iterations: Infinity
};
setInterval(()=> {

  if (alicemovement.playbackRate > .4) {
    alicemovement.playbackRate *= .9;    
  } 
   adjustBackgroundPlayback();
  }, 3000)
var background1Movement = background1.current.animate(
  sceneryFrames, sceneryTimingBackground);
  background1Movement.currentTime = background1Movement.effect.getTiming().duration / 2;
  
  var background2Movement = background2.current.animate(
  sceneryFrames, sceneryTimingBackground);
  
  var foreground1Movement = forground1.current.animate(
      sceneryFrames, sceneryTimingForeground);
      foreground1Movement.currentTime = foreground1Movement.effect.getTiming().duration / 2;
    
  var foreground2Movement = forground2.current.animate(
    sceneryFrames, sceneryTimingForeground)

    var picture =[foreground1Movement,foreground2Movement,
      background1Movement,background2Movement]
      
      var adjustBackgroundPlayback = function() {
        if (alicemovement.playbackRate < .8) {
          picture.forEach(function(anim) {
            anim.playbackRate = alicemovement.playbackRate/2 * -1;
          });
        } else if (alicemovement.playbackRate > 1.2) {
          picture.forEach(function(anim) {
            anim.playbackRate = alicemovement.playbackRate/2;
          });
        } else {
          picture.forEach(function(anim) {
            anim.playbackRate = 0;    
          });
        }   
      }
      adjustBackgroundPlayback();
      const speed=()=>{alicemovement.playbackRate *=1.1 }
    window.addEventListener('click',speed)
      
},[])
console.log(alicequeen)
console.log(background1)
console.log(background2)


  return (
  <div className='container'>
      <div className="sky"/>
      <div className= "earth">
        <div className='alice'>
      <img ref={alicequeen} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png" 
      srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen.png 2x"
       alt="Alice and the Red Queen running to stay in place."/>    
      </div>
      </div>
      <div className="scenery" ref={forground1}>
    <img id='palm3' src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png" 
    srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3.png 2x" 
    alt=" "/>
  </div>
  <div className="scenery" id='foreground2' ref={forground2}>    
    <img id='bush' src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png" 
    srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush.png 2x" alt=" "/>
    <img id='w_rock_upright' src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png" 
    srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright.png 2x" alt=" "/>
  </div>
<div className="scenery" id="background1" ref={background1}>
    <img id="r_pawn_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright.png 2x" alt=" "/>
    <img id="w_rook" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook.png 2x" alt=" "/>
    <img id="palm1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1.png 2x" alt=" "/>
</div>
  <div className="scenery" id="background2" ref={background2}>
    <img id="r_pawn" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn.png 2x" alt=" "/>

    <img id="r_knight" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight.png 2x" alt=" "/>
    <img id="palm2" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2.png 2x" alt=" "/>
  </div>
  </div>



  
  );
}

export default App;

