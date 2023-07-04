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
                <div className="skills-container h-screen flex lg:flex-row sm:flex-row mobile:flex-col lg:gap-6  mobile:gap-3 justify-center items-center">
                    <h1 className="mobile:top-[18%]">{enLanguage.skills.title}</h1>
                    <div className="card lg:min-w-[18rem] lg:min-h-[18rem] sm:min-w-[12.5rem] sm:min-h-[15rem] mobile:min-w-[10rem] mobile:min-h-[6rem] max-w-mobile lg:p-7 sm:p-5 mobile:p-3 lg:mt-0 sm:mt-0 mobile:mt-[7rem]  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center">
                        <h5 className="lg:text-2xl sm:text-xl mobile:text-sm font-bold tracking-tight text-gray-900 dark:text-white mb-4">Technical Skills</h5>
                        <ul className="mb-3 font-normal sm:text-lg lg:text-xl mobile:text-xxs text-gray-700 dark:text-gray-400 tracking-wider">
                            {enLanguage.skills.technical_skills_array.map((skill)=>{
                                return (
                                    <li key={skill}>{skill}</li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="card lg:min-w-[18rem] lg:min-h-[18rem] sm:min-w-[12.5rem] sm:min-h-[15rem] mobile:min-w-[10rem] mobile:min-h-[6rem] max-w-mobile lg:p-7 sm:p-5 mobile:p-3 lg:mt-0  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center">
                        <h5 className="lg:text-2xl sm:text-xl mobile:text-sm font-bold tracking-tight text-gray-900 dark:text-white mb-4">Other skills</h5>
                        <ul className="mb-3 font-normal sm:text-lg lg:text-xl mobile:text-xxs text-gray-700 dark:text-gray-400 tracking-wider">
                            {enLanguage.skills.other_skills_array.map((skill)=>{
                                return (
                                    <li key={skill}>{skill}</li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="card lg:min-w-[18rem] lg:min-h-[18rem] sm:min-w-[12.5rem] sm:min-h-[15rem] mobile:min-w-[10rem] mobile:min-h-[6rem] max-w-mobile lg:p-7 sm:p-5 mobile:p-3 lg:mt-0  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center">
                        <h5 className="lg:text-2xl sm:text-xl mobile:text-sm font-bold tracking-tight text-gray-900 dark:text-white mb-4">Tools</h5>
                        <ul className="mb-3 font-normal sm:text-lg lg:text-xl mobile:text-xxs text-gray-700 dark:text-gray-400 tracking-wider">
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
                <div className="skills-container h-screen flex lg:flex-row sm:flex-row mobile:flex-col lg:gap-6  mobile:gap-3 justify-center items-center">
                <h1 className="mobile:top-[18%]">{plLanguage.skills.title}</h1>
                <div className="card lg:min-w-[18rem] lg:min-h-[18rem] sm:min-w-[12.5rem] sm:min-h-[15rem] mobile:min-w-[10rem] mobile:min-h-[6rem] max-w-mobile lg:p-7 sm:p-5 mobile:p-3 lg:mt-0 sm:mt-0 mobile:mt-[7rem]  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center">
                    <h5 className="lg:text-2xl sm:text-xl mobile:text-sm font-bold tracking-tight text-gray-900 dark:text-white mb-4">Technologie</h5>
                    <ul className="mb-3 font-normal sm:text-lg lg:text-xl mobile:text-xxs text-gray-700 dark:text-gray-400 tracking-wider">
                        {plLanguage.skills.technical_skills_array.map((skill)=>{
                            return (
                                <li key={skill}>{skill}</li>
                            )
                        })}
                    </ul>
                </div>
                <div className="card lg:min-w-[18rem] lg:min-h-[18rem] sm:min-w-[12.5rem] sm:min-h-[15rem] mobile:min-w-[10rem] mobile:min-h-[6rem] max-w-mobile lg:p-7 sm:p-5 mobile:p-3 lg:mt-0  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center">
                    <h5 className="lg:text-2xl sm:text-xl mobile:text-sm font-bold tracking-tight text-gray-900 dark:text-white mb-4">Inne umiejętności</h5>
                    <ul className="mb-3 font-normal sm:text-lg lg:text-xl mobile:text-xxs text-gray-700 dark:text-gray-400 tracking-wider">
                        {plLanguage.skills.other_skills_array.map((skill)=>{
                            return (
                                <li key={skill}>{skill}</li>
                            )
                        })}
                    </ul>
                </div>
                <div className="card lg:min-w-[18rem] lg:min-h-[18rem] sm:min-w-[12.5rem] sm:min-h-[15rem] mobile:min-w-[10rem] mobile:min-h-[6rem] max-w-mobile lg:p-7 sm:p-5 mobile:p-3 lg:mt-0  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center">
                    <h5 className="lg:text-2xl sm:text-xl mobile:text-sm font-bold tracking-tight text-gray-900 dark:text-white mb-4">Narzędzia</h5>
                    <ul className="mb-3 font-normal sm:text-lg lg:text-xl mobile:text-xxs text-gray-700 dark:text-gray-400 tracking-wider">
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
            <button className="uparrow mobile:top-[12%]" onClick={()=> scrollTo(backToSectionRef)}></button>
            )}  
            {showArrowDown &&(
            <button className="downarrow mobile:bottom-[1%]" onClick={()=> scrollTo(goToSectionRef)}></button>
            )}  
        </div>
        
        </>
    )
}