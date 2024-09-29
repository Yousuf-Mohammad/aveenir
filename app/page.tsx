"use client"
import TopPage from "../component/TopPage/TopPage";
// import Menu from "@/component/Menu/Menu";
import About from "@/component/About/About";
import Products from "@/component/Products/Products";
import Services from "@/component/Services/Services"
import Client from "@/component/Clients/Client";
// import Footer from "@/component/Footer/Footer"
import Contact from "@/component/Contact/Contact"
import Stripe from "@/component/Stripe/Stripe"
export default function Home() {
  return (
    
    <main>
      {/* <Map/> */}
      
      <TopPage/>
      <Stripe/>
      {/* <Swipper/> */}
      {/* <ClientMarquee/> */}
      <About/>
      <Products/>
      <Services/>
      <Client/>
      <Contact/>
      
    </main>
  
  );
}
