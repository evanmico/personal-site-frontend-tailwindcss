
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
    //const projectSet = projects.map(({title,date,description, link},idx)=>(<Project key={idx} title={title} date={date} description={description} link={link}/>));
    return (
        <section className="space-y-6">
            {projects.map(({title,date,description, link},idx)=>(<Project key={idx} title={title} date={date} description={description} link={link}/>))}
        </section>
    )
}

function Projects() {
    const projects = [
        {
            "title":"OCR for Mariokart Tournament Score Tracking",
            "date":"2024-11-27",
            "description":"A first attempt at using an open source OCR model called PaddleOCR to scrape leaderboard scores from screenshots of finished races in Mariokart 8 Deluxe.",
            "link":"https://github.com/evanmico/mk8dx-raceTable-PaddleOCR"
        },
        {
            "title":"Game Song Web Scraper",
            "date":"2024-10-22",
            "description":"A project purely because a site wanted to charge me if I wanted to download an entire album with one click, so I made a scraper to download each song in it individually automatically which was free."
        },
        {
            "title":"Rummikub Web Game at Shellhacks 2024",
            "date":"2024-10-01",
            "description":"A project attempted at a hackathon to digitize a game I love called Rummikub.",
            "link":"https://github.com/evanmico/shellhacks2024-rumikubGame_frontend"
        },
        {
            "title":"MK Leaderboard Discord Bot",
            "date": "2024-02-20",
            "description":"A bot that keeps a live leaderboard of the current timetrial top times in a designated thread.",
            "link":"https://github.com/evanmico/mk-leaderboard-discord-bot"
        },
        {
            "title":"Physical Healthcare Office Client Managment System",
            "date":"2024-02-17",
            "description":"A web app that acts as a portal for clients to schedule appointments with a physical therapist."
        },
        {
            "title":"Volunte at Knighthacks 2023",
            "date": "2023-10-08",
            "description":"A webapp built during a hackathon with the goal of helping volunteering organizations find volunteers and volunteers to find volunteering work.",
            "link":"https://github.com/webbgamers/volunte"
        }
    ];

    return(
        <>
            <InfoSection headingText={"My Projects"} extra={<ProjectList projects={projects}/>}/>
        </>
    )
}

export default Projects