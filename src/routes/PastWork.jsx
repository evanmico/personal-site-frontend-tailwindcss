import { pastWork } from "../data/pastWork";

function InfoSection({headingText, bodyText, extra}){
    return (
        <section className="shadow-2xl flex flex-col p-4 space-y-5 max-w-5xl w-full items-center border-bg-secondary border-solid border-2 rounded-xl bg-bg-secondary/50 text-center">
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

function Project({title,date,description}) {
    const dateObj = new Date(date);
    return (
        <section className="shadow-lg bg-txt-lg/5 border-solid space-y-4 border-4 border-txt-lg rounded-xl p-3">
            <div className="flex place-content-between border-b-4 pb-2 border-txt-lg">
                <h3 className="text-accent-dark text-3xl font-bold">
                    {title}
                </h3>
                <h3 className="text-accent-dark text-3xl font-bold">
                    {dateObj.getDate()}/{dateObj.getMonth()+1}/{dateObj.getFullYear()} {console.log(dateObj)}
                </h3>
            </div>
            <p className="text-txt-sm text-2xl">
                {description}
            </p>
        </section>
    )
}

function ProjectList({projects}) {
    const projectSet = projects.map(({id,title,date,description, link},idx)=>(<Project key={id} title={title} date={date} description={description} link={link}/>));
    return (
        <section className="space-y-6">
            {projectSet}
        </section>
    )
}

function PastWork() {

}

export default PastWork;