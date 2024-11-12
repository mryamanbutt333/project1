"use client"

// eslint-disable-next-line @typescript-eslint/no-unused-vars

import Hero from "@/Components/Hero";
// import Image from "next/image";
import Medicine from "@/Components/Medicine";
import Contact from "@/Components/Contact";
import About from "@/Components/About";
import Aos from"aos"
import { useEffect } from "react";




export default function Home() {
  useEffect (() =>{
    Aos.init({
      easing:"ease-out-back",
      duration:1200,
      delay:100,
      mirror:true,
      anchorPlacement:"bottom-bottom",
      offset:160,
    })
    Aos.refresh()
  },[]);
  return (
   <main>
    <Hero />
    <Medicine />
    <Contact />
    <About/>
   </main>
  );
}
