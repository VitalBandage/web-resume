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
    const [popupNavMenu,setPopupNavMenu] = useState(false)
    const headerRef = useRef()
    const ContactRef = useRef(null)
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
            <div className='language-selector fixed flex flex-row lg:translate-y-3/4 mobile:translate-y-full translate-x-1/4 z-20'>
                    <img className='language-img' src='./images/earth_globe.svg'></img>
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
                    <div ref={headerRef} className='flex flex-row'>
                        <div className='hidden lg:flex flex-row gap-2 [&>*]:p-1'>
                            <button className='header-buttons' onClick={()=> {scrollTo(AboutRef)}}>{enLanguage.header.aboutButton}</button>
                            <button className='header-buttons' onClick={()=> {scrollTo(SkillsRef)}}>{enLanguage.header.skillsButton}</button>
                            <button className='header-buttons' onClick={()=> {scrollTo(ProjectsRef)}}>{enLanguage.header.projectsButton}</button>
                            <button className='header-buttons'onClick={() =>{setPopup(true)}}>{enLanguage.header.contactButton}</button>
                        </div>
                        <div className='relative lg:hidden flex'>
                            <button onClick={()=>{setPopupNavMenu(true)}}>
                                <img src='./images/burger_menu.svg'></img>
                            </button>
                        </div>
                        {popupNavMenu && (
                            <ClickAwayListener
                            onClickAway={()=>{ContactRef.current === null ? setPopupNavMenu(false) : setPopupNavMenu(true)}}
                            className='relative'
                            >
                                <div className='navbar-menu z-50 bg-white absolute w-[11rem] h-screen p-8 border-l-2 right-0 top-0'>
                                    <button onClick={()=>{setPopupNavMenu(false)}}>
                                        <img src='./images/close_cross.svg' className='max-w-[24px] max-h-[24px]'></img>
                                    </button>
                                    <ul className='flex gap-6 flex-col text-center items-center mt-10'>
                                        <li>
                                            <button className='header-buttons hover:bg-lightgrey hover:rounded focus:bg-lightgrey focus:rounded' onClick={()=> {scrollTo(AboutRef);setPopupNavMenu(false) }}>{enLanguage.header.aboutButton}</button>
                                        </li>
                                        <li>
                                            <button className='header-buttons  hover:bg-lightgrey hover:rounded focus:bg-lightgrey focus:rounded' onClick={()=> {scrollTo(SkillsRef);setPopupNavMenu(false)}}>{enLanguage.header.skillsButton}</button>
                                        </li>
                                        <li>
                                            <button className='header-buttons  hover:bg-lightgrey hover:rounded focus:bg-lightgrey focus:rounded' onClick={()=> {scrollTo(ProjectsRef);setPopupNavMenu(false)}}>{enLanguage.header.projectsButton}</button>
                                        </li>
                                        <li>
                                            <button className='header-buttons hover:bg-lightgrey hover:rounded focus:bg-lightgrey focus:rounded'onClick={() =>{setPopup(true)}}>{enLanguage.header.contactButton}</button>
                                        </li>
                                    </ul>
                                    <div></div>
                                </div>
                            </ClickAwayListener>
                        )}
                    </div>
                )}
                {currentLanguage == "pl" && (
                    <div ref={headerRef} className='flex flex-row'>
                    <div className='hidden lg:flex flex-row gap-2 [&>*]:p-1'>
                        <button className='header-buttons' onClick={()=> {scrollTo(AboutRef)}}>{plLanguage.header.aboutButton}</button>
                        <button className='header-buttons' onClick={()=> {scrollTo(SkillsRef)}}>{plLanguage.header.skillsButton}</button>
                        <button className='header-buttons' onClick={()=> {scrollTo(ProjectsRef)}}>{plLanguage.header.projectsButton}</button>
                        <button className='header-buttons'onClick={() =>{setPopup(true)}}>{plLanguage.header.contactButton}</button>
                    </div>
                    <div className='relative lg:hidden flex'>
                        <button onClick={()=>{setPopupNavMenu(true)}}>
                            <img src='./images/burger_menu.svg'></img>
                        </button>
                    </div>
                    {popupNavMenu && (
                        <ClickAwayListener
                        onClickAway={()=>{ContactRef.current === null ? setPopupNavMenu(false) : setPopupNavMenu(true)}}
                        className='relative'
                        >
                            <div className='navbar-menu z-50 bg-white absolute w-[11rem] h-screen p-8 border-l-2 right-0 top-0'>
                                <button onClick={()=>{setPopupNavMenu(false)}}>
                                    <img src='./images/close_cross.svg' className='max-w-[24px] max-h-[24px]'></img>
                                </button>
                                <ul className='flex gap-6 flex-col text-center items-center mt-10'>
                                    <li>
                                        <button className='header-buttons hover:bg-lightgrey hover:rounded focus:bg-lightgrey focus:rounded' onClick={()=> {scrollTo(AboutRef);setPopupNavMenu(false) }}>{plLanguage.header.aboutButton}</button>
                                    </li>
                                    <li>
                                        <button className='header-buttons  hover:bg-lightgrey hover:rounded focus:bg-lightgrey focus:rounded' onClick={()=> {scrollTo(SkillsRef);setPopupNavMenu(false)}}>{plLanguage.header.skillsButton}</button>
                                    </li>
                                    <li>
                                        <button className='header-buttons  hover:bg-lightgrey hover:rounded focus:bg-lightgrey focus:rounded' onClick={()=> {scrollTo(ProjectsRef);setPopupNavMenu(false)}}>{plLanguage.header.projectsButton}</button>
                                    </li>
                                    <li>
                                        <button className='header-buttons hover:bg-lightgrey hover:rounded focus:bg-lightgrey focus:rounded'onClick={() =>{setPopup(true)}}>{plLanguage.header.contactButton}</button>
                                    </li>
                                </ul>
                                <div></div>
                            </div>
                        </ClickAwayListener>
                    )}
                </div>
                )}
                {currentLanguage === null && (
                    <div ref={headerRef} className='flex flex-row'>
                        <div className='hidden lg:flex flex-row gap-2 [&>*]:p-1'>
                            <button className='header-buttons' onClick={()=> {scrollTo(AboutRef)}}>{enLanguage.header.aboutButton}</button>
                            <button className='header-buttons' onClick={()=> {scrollTo(SkillsRef)}}>{enLanguage.header.skillsButton}</button>
                            <button className='header-buttons' onClick={()=> {scrollTo(ProjectsRef)}}>{enLanguage.header.projectsButton}</button>
                            <button className='header-buttons'onClick={() =>{setPopup(true)}}>{enLanguage.header.contactButton}</button>
                        </div>
                        <div className='relative lg:hidden flex'>
                            <button onClick={()=>{setPopupNavMenu(true)}}>
                                <img src='./images/burger_menu.svg'></img>
                            </button>
                        </div>
                        
                    </div>
                )}
            </div>
            {popup && (
                <ClickAwayListener onClickAway={() => {setPopup(false)}}
                >
                        <div ref={ContactRef} className='popup lg:right-[5px] mobile:right-[11.5rem] lg:top-[6vh] mobile:top-[20vh] fixed grid grid-cols-2 auto-rows-min font-xl gap-5 justify-center content-center'>
                            <a target='blank' onClick={() => {setPopup(false)}} href={APP_CONFIG.LINKEDIN_URL} className='flex flex-col text-center justify-center align-center h-20'>
                                <img src='./images/LinkedIn_icon.svg'></img>
                                <p >Linkedin</p>
                            </a>
                            <a target='blank' onClick={() => {setPopup(false)}}  href={APP_CONFIG.GITHUB_URL} className='flex flex-col text-center justify-center align-center h-20'>
                                <img src='./images/github_icon.svg'></img>
                                <p>Github</p>
                            </a>
                            <div className='col-span-full pt-1 pointer-events-none email'>email: kacperoleksiak@o2.pl</div>
                        </div>
                </ClickAwayListener>
            )}
        </div>
        </>
    )
}