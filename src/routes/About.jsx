import { NavLink } from "react-router";
import { infoSections, buttonSections } from "../data/infoSections.js";

function Button({text, nav}){
    return (
        <NavLink to={`/${nav}`} >
            <button className="w-full shadow-md font-bold bg-txt-sm/5 text-2xl border-solid border-text-sm border-4 rounded-xl p-2 hover:bg-bg-primary/50 hover:duration-300 hover:border-accent-dark hover:shadow-lg">
                {text}
            </button>
        </NavLink>
    )
}

function InfoSection({headingText, bodyText, extra}){
    return (
        <section className="shadow-2    xl flex flex-col p-4 space-y-5 max-w-5xl w-full items-center border-bg-secondary border-solid border-2 rounded-xl bg-bg-secondary/50 text-center">
            <section className="space-y-3">
            <h2 className="text-txt-lg text-5xl font-bold">{headingText}</h2>
            <p className="text-txt-sm text-2xl">
                {bodyText}
            </p> 
            </section>               
            {extra}
        </section>
    )
}

function CallToAction({headingText, buttons}){
    const buttonSet = buttons.map(({text,nav}, idx) => (<Button key={idx} text={text} nav={nav}/>));
    return(
        <section className="shadow-lg flex flex-col space-y-4 p-4 max-w-2xl w-full border-accent-dark border-solid border-2 rounded-xl bg-accent-dark/25 text-center">
            <h3 className="text-txt-lg text-4xl font-bold">{headingText}</h3>
            <div className={`grid grid-cols-${buttonSet.length} gap-2 text-txt-sm text-xl justify-items-stretch`}>
                {buttonSet}
            </div>
        </section>
    )
}

function About() {
    const callToActionList = buttonSections.map(({id,headingText,buttons})=> (<CallToAction key={id} headingText={headingText} buttons={buttons} />))
    const sectionSet = infoSections.map(({id, headingText, bodyText, buttons}) => (<InfoSection key={id} headingText={headingText} bodyText={bodyText} extra={buttons&&(callToActionList.find(({key}) => key===id))}/>));
    return(
        <>
            {sectionSet}
        </>
    )
}

export default About