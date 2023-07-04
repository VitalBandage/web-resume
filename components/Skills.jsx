/* eslint-disable react/prop-types */
import { gsap} from "gsap/all";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { enLanguage, plLanguage } from './../lib/config/languageConfig';
gsap.registerPlugin(ScrollTrigger);



export function Skills({
    scrollTo,
    goToSectionRef,
    showArrowUp,
    showArrowDown,
    backToSectionRef,
    currentLanguage
}) {
    
    return (
        <>
        <div className='sectionInfo  scroll-snap-container'>
            {currentLanguage == "en" && (
                <div className="skills-container h-screen flex flex-row gap-6 justify-center items-center">
                    <h1>{enLanguage.skills.title}</h1>
                    <div className="card max-w-sm p-7 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center">
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">Technical Skills</h5>
                        <ul className="mb-3 font-normal text-xl text-gray-700 dark:text-gray-400 tracking-wider">
                            {enLanguage.skills.technical_skills_array.map((skill)=>{
                                return (
                                    <li key={skill}>{skill}</li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="card max-w-sm p-7 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center">
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">Other skills</h5>
                        <ul className="mb-3 font-normal text-xl text-gray-700 dark:text-gray-400 tracking-wider">
                            {enLanguage.skills.other_skills_array.map((skill)=>{
                                return (
                                    <li key={skill}>{skill}</li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="card max-w-sm p-7 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center">
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">Tools</h5>
                        <ul className="mb-3 font-normal text-xl text-gray-700 dark:text-gray-400 tracking-wider">
                            {enLanguage.skills.tools_array.map((tool)=>{
                                return (
                                    <li key={tool}>{tool}</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            )}
            {currentLanguage == "pl" && (
                <div className="skills-container h-screen flex flex-row gap-6 justify-center items-center">
                    <h1>{plLanguage.skills.title}</h1>
                    <div className="card max-w-sm p-7 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center">
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">Technologie</h5>
                        <ul className="mb-3 font-normal text-xl text-gray-700 dark:text-gray-400 tracking-wider">
                            {plLanguage.skills.technical_skills_array.map((skill)=>{
                                return (
                                    <li key={skill}>{skill}</li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="card max-w-sm p-7 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center">
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">Inne umiejętności</h5>
                        <ul className="mb-3 font-normal text-xl text-gray-700 dark:text-gray-400 tracking-wider">
                            {plLanguage.skills.other_skills_array.map((skill)=>{
                                return (
                                    <li key={skill}>{skill}</li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="card max-w-sm p-7 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center">
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">Narzędzia</h5>
                        <ul className="mb-3 font-normal text-xl text-gray-700 dark:text-gray-400 tracking-wider">
                            {plLanguage.skills.tools_array.map((tool)=>{
                                return (
                                    <li key={tool}>{tool}</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            )}
            {showArrowUp &&(
            <button className="uparrow" onClick={()=> scrollTo(backToSectionRef)}></button>
            )}  
            {showArrowDown &&(
            <button className="downarrow" onClick={()=> scrollTo(goToSectionRef)}></button>
            )}  
        </div>
        
        </>
    )
}