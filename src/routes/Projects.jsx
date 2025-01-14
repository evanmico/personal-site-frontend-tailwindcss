
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
    return (
        <section className="shadow-lg bg-txt-lg/5 border-solid space-y-4 border-4 border-txt-lg rounded-xl p-3">
            <div className="flex place-content-between border-b-4 pb-2 border-txt-lg">
                <h3 className="text-accent-dark text-3xl font-bold">
                    {title}
                </h3>
                <h3 className="text-accent-dark text-3xl font-bold">
                    {date.getDay()}/{date.getMonth()}/{date.getFullYear()}
                </h3>
            </div>
            <p className="text-txt-sm text-2xl">
                {description}
            </p>
        </section>
    )
}

function ProjectList({projects}) {
    const projectSet = projects.map(({title,date,description},idx)=>(<Project key={idx} title={title} date={date} description={description}/>));
    return (
        <section className="space-y-6">
            {projectSet}
        </section>
    )
}

function Projects() {
    const projects = [
        {
            "title":"MK Leaderboard Discord Bot",
            "date": new Date(2024,3,6),
            "description":"A bot that keeps a live leaderboard of the current timetrial top times in a designated thread."
        },
        {
            "title":"Physical Healthcare office Client Managment System",
            "date": new Date(2024,4,3),
            "description":"A web app that acts as a portal for clients to schedule appointments with a physical therapist."
        }
    ];

    return(
        <>
            <InfoSection headingText={"My Projects"} extra={<ProjectList projects={projects}/>}/>
        </>
    )
}

export default Projects