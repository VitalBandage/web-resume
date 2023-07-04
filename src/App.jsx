import {Header} from '../components/Header'
import {About} from '../components/About';
import {Projects} from '../components/Projects';
import {Skills} from '../components/Skills';
import { useEffect, useRef, useState } from 'react';
import { gsap } from "gsap/all";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ChooseLanguage } from '../components';
gsap.registerPlugin(ScrollTrigger);


export default function App() {
  const AboutRef = useRef(null)
  const ProjectsRef = useRef(null)
  const SkillsRef = useRef(null)
  const BlurRef = useRef(null)
  const [mounted,setMounted] = useState(false)
  const [isOpen,setIsOpen] = useState(true)
  const [currentLanguage, setCurrentLanguage] = useState(localStorage.getItem("language"))

  useEffect(()=>{
    window.scrollTo(0,0)
    AboutRef.current.scrollIntoView()
  },[])

  useEffect(()=>{
    if(currentLanguage !== null){
      setIsOpen(false)
    }
  },[currentLanguage])
  useEffect(()=>{
    const gsapArray = gsap.utils.toArray('.sectionInfo')
    if(!isOpen){
      gsapArray.forEach((item)=>{
        gsap.fromTo(
          item,
          {
              autoAlpha:0,
          },
          {
              autoAlpha:1,
              duration:2,
              scrollTrigger:{
                  trigger: item,
                  //markers:true,
                  start: "top 60%",
                  end: "bottom 0%",
                  // toggleActions: "play none none none"
              }
          }
      )
      gsap.fromTo(
        '.downarrow',
        {
          autoAlpha:0,
        },
        {
          autoAlpha:1,
          duration:2,
        }
      )
      })
    }
  },[setMounted, isOpen])




  function scrollTo(SectionRef){
    SectionRef.current.scrollIntoView({behavior: "smooth"})
  }
  
  return (
    <>
    <div ref={BlurRef} className={!isOpen ? " " : "blur-bg"}>
      <Header
      AboutRef ={AboutRef}
      SkillsRef ={SkillsRef}
      ProjectsRef ={ProjectsRef}
      scrollTo={scrollTo}
      isOpen={isOpen}
      currentLanguage={currentLanguage}
      setCurrentLanguage = {setCurrentLanguage}
      />
      <div className='relative' ref={AboutRef}>
        <About 
          scrollTo={scrollTo}
          goToSectionRef = {SkillsRef}
          showArrow={true}
          currentLanguage={currentLanguage}
        />
        <div>
          <ChooseLanguage 
          isOpen = {isOpen}
          setIsOpen={setIsOpen}
          setCurrentLanguage = {setCurrentLanguage}
          ></ChooseLanguage>
        </div>
      </div>
    </div>
    <div ref={SkillsRef} className={!isOpen ? " " : "hidden"}>
      <Skills 
        scrollTo={scrollTo}
        backToSectionRef ={AboutRef}
        goToSectionRef = {ProjectsRef}
        showArrowUp={true}
        showArrowDown={true}
        currentLanguage={currentLanguage}
      />
    </div>
    <div ref={ProjectsRef} className={!isOpen ? " " : "hidden"}>
      <Projects
        scrollTo={scrollTo}
        goToSectionRef = {SkillsRef}
        showArrow={true}
        mounted={mounted} 
        setMounted = {setMounted}
        currentLanguage={currentLanguage}
        />
    </div>
    {/* <div className='zmienic na component dark-mode'></div> */}
    
      
    </>
  )
}

