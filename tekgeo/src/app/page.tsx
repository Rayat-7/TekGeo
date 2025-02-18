import CTA from "@/components/CTA";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import  VideoShowcase  from "@/components/video";


export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white text-black">
      <Header />
      <Hero/> 
      <VideoShowcase videoId={"AlnYmT22_Mg"} title={"GeoFencing Technology"} description={"What is Geofencing and How Does it Works?"}/>
      <Feature/>
      <Pricing/>
      <CTA/>
      <Footer/>
    </main>
    
  );
}
