// components/TextReveal.js
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./TextReveal.css"
gsap.registerPlugin(ScrollTrigger);

export default function TextReveal() {
  const textRef = useRef(null);

  useEffect(() => {
    // Splitting the text into individual letters
    const letters = textRef.current.textContent.split('');
    textRef.current.innerHTML = letters
      .map((letter) => `<span class="letter">${letter}</span>`)
      .join('');

    // Animating each letter color change
    gsap.fromTo(
      '.letter',
      { color: 'transparent',
        // textShadow: '0 0 5px lightGray',
        webkitTextStroke: '1px black'
      }, // Initial color (black)
      {
        color: 'var(--foreground)', // Target color (red)
        stagger: .5, // Delay between each letter
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 70%',
          end: 'bottom 70%',
          toggleActions: 'play none none none',
          markers: true,
          scrub:2
        },
      }
    );
  }, []);

  return (
    <div className="text-reveal-container">
      <h2 ref={textRef} id="text-reveal">
        Reveal Me with ScrollIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search
      </h2>
    </div>
  );
}
