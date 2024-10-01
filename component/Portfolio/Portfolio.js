import React from 'react';
import './Portfolio.css';


import Development from "@/component/Development/Development";
import GraphicalSolution from "@/component/GraphicalSolution/GraphicalSolution"



const Portfolio = () => {
  return (
    <div>
        <h1 id='portfolioHeading'>Featured Work</h1>
        <div id='portfolioContainer'>
            {/* <Development/> */}
            <GraphicalSolution/>
        </div>
    </div>
  )
}

export default Portfolio