"use client"
import React,{useState} from 'react';
import './Portfolio.css';


import Development from "@/component/Development/Development";
import GraphicalSolution from "@/component/GraphicalSolution/GraphicalSolution"
import SocialMediaManagement from "@/component/SocialMediaManagement/SocialMediaManagement"


const Portfolio = () => {
  const [show, setShow] = useState("development");
  return (
    
    <div>
        <h1 id='portfolioHeading'>Featured Work</h1>
        <div id='portfolioContainer'>
            <div id='portfolioBtnContainer'>

                <button id={show==="development" ? "portfolioBtnActive" : "portfolioBtn"} onClick={() => setShow("development")}>Development</button>
                <button id={show==="graphical" ? "portfolioBtnActive" : "portfolioBtn"} onClick={() => setShow("graphical")}>Graphical Solution</button>
                <button id={show==="social" ? "portfolioBtnActive" : "portfolioBtn"} onClick={() => setShow("social")}>Social Media Management</button>
            </div>
            {show === "development" && <Development />}
            {show === "graphical" && <GraphicalSolution />}
            {show === "social" && <SocialMediaManagement />}
            
        </div>
    </div>
  )
}

export default Portfolio