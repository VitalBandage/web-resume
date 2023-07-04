import { gsap } from "gsap/all";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
/* eslint-disable react/prop-types */


export function About({
    scrollTo,
    goToSectionRef,
    showArrow,
}) {
    return (
        <>
        <div className="lg:h-screen mobile:h-screen flex flex-col justify-center items-center gap-2 scroll-snap-container">
            <div className="sectionInfo flex flex-col justify-center items-center gap-2" >
                <div className=" lg:text-5xl mobile:text-3xl blink-effect typing-effect cursor-default">Kacper Oleksiak</div>
                <div className="lg:text-2xl mobile:text-xl typing-effect-info cursor-default">Frontend React Developer</div>
            </div>
            
            {showArrow &&(
            <button className="downarrow" onClick={()=> scrollTo(goToSectionRef)}></button>
        )}
        </div>
        
        
        
        </>
    )
}
