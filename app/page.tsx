"use client"
import TopPage from "../component/TopPage/TopPage";
// import Menu from "@/component/Menu/Menu";

// import TextReveal from "@/component/Test/Test"
import About from "@/component/About/About";
// import Products from "@/component/Products/Products";
import Services from "@/component/Services/Services"
import Client from "@/component/Clients/Client";
import Team from "@/component/Team/Team";
// import Products2 from "@/component/ProductSlider/ProductSlider"
// import Products2 from "@/component/Products2/Products2"
// import Footer from "@/component/Footer/Footer"
// import Contact from "@/component/Contact/Contact"
// import Stripe from "@/component/Stripe/Stripe"
import Featured from "@/component/FeaturedWork/FeaturedWork"
// import ClientReview from "@/component/ClientReview/ClientReview"
// import Portfolio from "@/component/Portfolio/Portfolio"
export default function Home() {
  return (
    
    <main>
      {/* <Map/> */}
      
      <TopPage/>
      {/* <Stripe/> */}
      {/* <TextReveal/> */}
      {/* <Swipper/> */}
      {/* <ClientMarquee/> */}
      {/* <Products2/> */}
      <About/>
      
      {/* <Products2/> */}
      <Services/>
      <Featured/>
      <Team/>
      {/* <Portfolio/> */}
      {/* <ClientReview/> */}
      <Client/>
      {/* <Contact/> */}
      
    </main>
  
  );
}
