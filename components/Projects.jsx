
/* eslint-disable react/prop-types */
import { gsap} from "gsap/all";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from 'react';
import {Footer} from './Footer';
import { APP_CONFIG } from './../lib/config/config';
import { enLanguage, plLanguage } from "../lib/config/languageConfig";
gsap.registerPlugin(ScrollTrigger);




export function Projects({
    scrollTo,
    goToSectionRef,
    showArrow,
    mounted,
    setMounted,
    currentLanguage
}) 
{
    useEffect(()=>{
        setMounted(true)
    })

    return (
        <>
        <div className='sectionInfo  scroll-snap-container'>
            {currentLanguage == 'en' && (
                <div className="projects-container relative h-screen flex flex-row justify-center items-center gap-2">
                    <h1>{enLanguage.projects.title}</h1>
                    <div className="card max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href={APP_CONFIG.GITHUB_ASPNET_URL} target="blank">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{enLanguage.projects.asp_net.title}</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{enLanguage.projects.asp_net.description}</p>
                        <a href={APP_CONFIG.GITHUB_ASPNET_URL} target="blank" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            {enLanguage.projects.sourceCode}
                            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </a>
                    </div>
                    <div className="card max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href={APP_CONFIG.GITHUB_TRANSLATOR_URL}>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{enLanguage.projects.translatorReact.title}</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{enLanguage.projects.translatorReact.description}</p>
                        <a href={APP_CONFIG.GITHUB_TRANSLATOR_URL} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            {enLanguage.projects.sourceCode}
                            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </a>
                    </div>
                </div>
            )}
            {currentLanguage == 'pl' && (
                <div className="projects-container relative h-screen flex flex-row justify-center items-center gap-2">
                    <h1>{plLanguage.projects.title}</h1>
                    <div className="card max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href={APP_CONFIG.GITHUB_ASPNET_URL} target="blank">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{plLanguage.projects.asp_net.title}</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{plLanguage.projects.asp_net.description}</p>
                        <a href={APP_CONFIG.GITHUB_ASPNET_URL} target="blank" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            {plLanguage.projects.sourceCode}
                            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </a>
                    </div>
                    <div className="card max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href={APP_CONFIG.GITHUB_TRANSLATOR_URL}>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{plLanguage.projects.translatorReact.title}</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{plLanguage.projects.translatorReact.description}</p>
                        <a href={APP_CONFIG.GITHUB_TRANSLATOR_URL} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            {plLanguage.projects.sourceCode}
                            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </a>
                    </div>
                </div>
            )}
        

            {showArrow &&(
            <button className="uparrow" onClick={()=> scrollTo(goToSectionRef)}></button>
        )}  
        <Footer/>  
        </div>
        {mounted}
        </>
        
    )
}