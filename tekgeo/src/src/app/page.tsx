"use client"

import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import  VideoShowcase  from "@/components/video";
import { MagicCardDemo } from "@/components/cards";
import CarouselDemo from "@/components/Feature";


export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white text-black">
      <Header />
      <Hero/> 
      <VideoShowcase videoId={"AlnYmT22_Mg"} title={"GeoFencing Technology"} description={"What is Geofencing and How Does it Works?"}/>
      <MagicCardDemo/>
      <CarouselDemo/>
      <Pricing/>
      <CTA/>
      <Footer/>
    </main>
    
  );
}
