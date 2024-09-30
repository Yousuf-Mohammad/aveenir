// components/TextReveal.js
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function TextReveal() {
  const textRef = useRef(null);
  const spanRef = useRef(null);

  useEffect(() => {
    // Text reveal animation
    gsap.fromTo(
      spanRef.current,
      { opacity: 0, y: 50 },  // Start position
      {
        opacity: 1,
        y: 0,
        duration: 4,
        ease: 'power4.inOut',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',  // When to start the animation (trigger element at 80% of the viewport height)
          end: 'top 20%', // When the animation ends
          toggleActions: 'play none none none',
          scrub:2,
          markers: true,
        },
      }
    );
  }, []);

  let text= " Reveal Me with Scroll It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose."
  return (
    <div className="text-reveal-container" style={{ height: '150vh', paddingTop: '200px' }}>
      <h1 ref={textRef} style={{ fontSize: '3rem', textAlign: 'center' }}>
       {text.split("").map((letter, index) => (
         <span ref={spanRef} style={{ display: 'inline-block' , opacity: 0 }}  key={index}>{letter}</span>
       ))}
        </h1>
    </div>
  );
}
