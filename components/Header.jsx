/* eslint-disable react/prop-types */
import { useRef, useState,useEffect } from 'react';
import { gsap } from 'gsap/all'
import ClickAwayListener from 'react-click-away-listener';
import { APP_CONFIG } from '../lib/config';
import { enLanguage, plLanguage } from './../lib/config/languageConfig';
export function Header({
    AboutRef,
    ProjectsRef,
    SkillsRef,
    scrollTo,
    isOpen,
    currentLanguage,
    setCurrentLanguage
}) {
    const [popup, setPopup] = useState(false)
    const headerRef = useRef()
    const ref = useRef(null)
    useEffect(()=>{
        if(!isOpen){
            gsap.fromTo(
                headerRef.current,
                {
                autoAlpha: 0,
                },
                {
                autoAlpha: 1,
                duration: 2,
                ease: "power3.out",
                }
            )
            gsap.fromTo(
                '.language-selector',
                {
                    autoAlpha: 0,
                },
                {
                    autoAlpha: 1,
                    duration: 2,
                    ease: "power3.out",
                }
            )
        }
    },[isOpen])
    
    return (
        <>
        <div className="relative z-10">
            <div className='language-selector fixed flex flex-row translate-y-3/4 translate-x-1/4 z-20'>
                    <img className='language-img' src='./earth_globe.png'></img>
                    {currentLanguage == "en" && (
                        <select onChange={(e)=>{
                            setCurrentLanguage(e.target.value)
                            localStorage.setItem("language",e.target.value)
                        }} defaultValue={currentLanguage}>
                        {Object.entries(enLanguage.header.languageSelector).map(([key,value]) =>{
                            return(
                                <option key={key} value={key}>{value}</option>
                            )
                        })}
                    </select>
                    )}
                    {currentLanguage == "pl" && (
                        <select onChange={(e)=>{
                            setCurrentLanguage(e.target.value)
                            localStorage.setItem("language",e.target.value)
                        }} defaultValue={currentLanguage}>
                            {Object.entries(plLanguage.header.languageSelector).map(([key,value]) =>{
                                return(
                                    <option key={key} value={key}>{value}</option>
                                )
                            })}
                        </select>
                    )}
                    {currentLanguage === null && (
                        <select onChange={(e)=>{setCurrentLanguage(e.target.value)}} defaultValue={'Language'}>
                            <option value='Language'>Language</option>
                        </select>
                    )}
                    
            </div>
            <div className="fixed top-0 left-0 right-0 flex flex-row gap-2 justify-end border-solid border-b-2 border-sky-500 [&>*]:p-4 text-lg">
                
                {currentLanguage == "en" && (
                    <div ref={headerRef} className='flex flex-row gap-2 [&>*]:p-1'>
                        <button className='header-buttons' onClick={()=> {scrollTo(AboutRef)}}>{enLanguage.header.aboutButton}</button>
                        <button className='header-buttons' onClick={()=> {scrollTo(SkillsRef)}}>{enLanguage.header.skillsButton}</button>
                        <button className='header-buttons' onClick={()=> {scrollTo(ProjectsRef)}}>{enLanguage.header.projectsButton}</button>
                        <button className='header-buttons'onClick={() =>{setPopup(true)}}>{enLanguage.header.contactButton}</button>
                    </div>
                )}
                {currentLanguage == "pl" && (
                    <div ref={headerRef} className='flex flex-row gap-2 [&>*]:p-1'>
                        <button className='header-buttons' onClick={()=> {scrollTo(AboutRef)}}>{plLanguage.header.aboutButton}</button>
                        <button className='header-buttons' onClick={()=> {scrollTo(SkillsRef)}}>{plLanguage.header.skillsButton}</button>
                        <button className='header-buttons' onClick={()=> {scrollTo(ProjectsRef)}}>{plLanguage.header.projectsButton}</button>
                        <button className='header-buttons'onClick={() =>{setPopup(true)}}>{plLanguage.header.contactButton}</button>
                    </div>
                )}
                {currentLanguage === null && (
                    <div ref={headerRef} className='flex flex-row gap-2 [&>*]:p-1'>
                        <button className='header-buttons' onClick={()=> {scrollTo(AboutRef)}}>{enLanguage.header.aboutButton}</button>
                        <button className='header-buttons' onClick={()=> {scrollTo(SkillsRef)}}>{enLanguage.header.skillsButton}</button>
                        <button className='header-buttons' onClick={()=> {scrollTo(ProjectsRef)}}>{enLanguage.header.projectsButton}</button>
                        <button className='header-buttons'onClick={() =>{setPopup(true)}}>{enLanguage.header.contactButton}</button>
                    </div>
                )}
            </div>
            {popup && (
                <ClickAwayListener onClickAway={() => {
                    setPopup(false)
                    ref.current.className = 'popup-out'
                    }}>
                        <div ref={ref} className='popup fixed grid grid-cols-2 auto-rows-min font-xl gap-5 justify-center content-center'>
                            <a target='blank' href={APP_CONFIG.LINKEDIN_URL} className='flex flex-col text-center justify-center align-center h-20'>
                                <img src='./LinkedIn_icon.svg'></img>
                                <a>Linkedin</a>
                            </a>
                            <a target='blank'  href={APP_CONFIG.GITHUB_URL} className='flex flex-col text-center justify-center align-center h-20'>
                                <img src='./github_icon.svg'></img>
                                <a>Github</a>
                            </a>
                            <div className='col-span-full pt-1 pointer-events-none email'>email: kacperoleksiak@o2.pl</div>
                        </div>
                </ClickAwayListener>
            )}
        </div>
        </>
    )
}