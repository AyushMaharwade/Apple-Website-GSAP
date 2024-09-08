import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";
import { useState } from "react";
import { useEffect } from "react";

const Hero = () => {

    const [VideoSrc , setVideoSrc]= useState(window.innerWidth < 780 ? smallHeroVideo : heroVideo)

    const handelVideoSrcSet = () =>{
        if(window.innerWidth < 760){
            setVideoSrc(smallHeroVideo)
        } else{
            setVideoSrc(heroVideo)
        }
    }

    useEffect( () => {
        window.addEventListener('resize', handelVideoSrcSet);

        return () =>{
            window.removeEventListener('resize',handelVideoSrcSet)
        }
    },[])

useGSAP(() => {
    gsap.to('#hero', {opacity: 1, delay: 3})
    gsap.to('#cta', {opacity: 1, y: -70, delay: 3})
    gsap.to('#price', {opacity: 1, y: -70, delay:3.5})
},[])

  return (
    <section className="w-full nav-height bg-black relative">
        <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">iPhone 15 Pro</p>
        <div className="md:w-10/12 w-9/12">
        <video className="pointer-events-none" autoPlay  muted playsInline={true} key={VideoSrc}>
            <source src={VideoSrc} type="video/mp4"/>
        </video>

        </div>
        </div>

        <div id="cta" className=" flex flex-col items-center opacity-0">
            <a id='buy'href="#highlights" className="btn font-medium">Buy</a>
            
        </div>
        <div id="price" className=" flex flex-col items-center opacity-0">
            <p className="font-semibold text-xl">From ₹129800.00</p>
        </div>

    </section>
  )
}

export default Hero