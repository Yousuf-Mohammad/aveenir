"use client"
import TopPage from "../component/TopPage/TopPage";
import Menu from "@/component/Menu/Menu";
import About from "@/component/About/About";
import Products from "@/component/Products/Products";
import Client from "@/component/Clients/Client";
import Footer from "@/component/Footer/Footer"
export default function Home() {
  return (
    <>

      <Menu/>
      <TopPage/>
      <About/>
      <Products/>
      <Client/>
      <Footer/>

      
    </>
  );
}
