"use client"
import TopPage from "../component/TopPage/TopPage";
// import Menu from "@/component/Menu/Menu";

// import TextReveal from "@/component/Test/Test"
import About from "@/component/About/About";
// import Products from "@/component/Products/Products";
import Services from "@/component/Services/Services"
import Client from "@/component/Clients/Client";
import Products2 from "@/component/ProductSlider/ProductSlider"
// import Footer from "@/component/Footer/Footer"
import Contact from "@/component/Contact/Contact"
import Stripe from "@/component/Stripe/Stripe"
export default function Home() {
  return (
    
    <main>
      {/* <Map/> */}
      
      <TopPage/>
      <Stripe/>
      {/* <TextReveal/> */}
      {/* <Swipper/> */}
      {/* <ClientMarquee/> */}
      {/* <Products2/> */}
      <About/>
      <Products2/>
      <Services/>
      <Client/>
      <Contact/>
      
    </main>
  
  );
}
