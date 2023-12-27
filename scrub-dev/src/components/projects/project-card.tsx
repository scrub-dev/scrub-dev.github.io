export default (props: any) => {
    const project: project = props.project

    const projectLink = (<>
    {project.project_link ?
        <a className="rounded-full bg-tertiary-2 bg-opacity-35 px-2 py-1 text-tertiary-1 col-span-1 float-right hover:transition-all hover:bg-opacity-100" href={project.project_link} target="_blank">Project</a>
        : null}
    </>)


    const liveLink = (<>
    {project.live_link ?
        <a className="rounded-full bg-tertiary-2 bg-opacity-35 px-2 py-1 text-tertiary-1 col-span-1 float-right hover:transition-all hover:bg-opacity-100" href={project.live_link} target="_blank">Live</a>
    : null}
    </>)

    const card = (
        <div className="grid grid-cols-10 py-2">
            <div className="col-span-3">
                <p className="text-white text-right pr-4 font-bold text-xl">{project.name}</p>
                <div className="pr-4">
                    <div id="link-boxes" className="flex float-right">
                        <div className="col-span-1 pr-2">
                            {liveLink}
                        </div>
                        <div className="col-span-1">
                            {projectLink}
                        </div>
                </div>
                </div>


            </div>
            <div className="col-span-7">
                <p className="text-white pt-1">{project.desc}</p>
                <p className="text-white pt-1 font-bold">Tags {project.tags.map(e => <span className="pl-1 rounded-full bg-secondary-1 px-1.5 py-0.5 bg-opacity-35 text-white mx-0.5 font-normal">{e}</span>)}</p>
            </div>

        </div>
    )
    return card
}