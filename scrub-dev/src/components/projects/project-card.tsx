export default (props: any) => {
    const project: project = props.project

    const projectLink = <>
    {project.project_link ?
        <a className="rounded-full bg-tertiary-2 bg-opacity-35 px-2 py-1 text-tertiary-1 col-span-1 float-right hover:transition-all hover:bg-opacity-100 shadow-lg block w-full text-center" href={project.project_link} target="_blank">Project</a>
        : null}
    </>

    const liveLink = <>
    {project.live_link ?
        <a className="rounded-full bg-tertiary-2 bg-opacity-35 px-2 py-1 text-tertiary-1 col-span-1 float-right hover:transition-all hover:bg-opacity-100 shadow-lg block w-full text-center" href={project.live_link} target="_blank">Live</a>
    : null}
    </>

    const card = (
        <div className="grid grid-cols-10 py-1 bg-white mb-2 rounded-2xl bg-opacity-5 overflow-hidden shadow-2xl">
            <div className="col-span-3">
                <p className="text-white text-right pr-4 font-bold lg:text-xl text-ellipsis">{project.name}</p>
                <div className="pr-4">
                    <div id="link-boxes" className="flex flex-row flex-wrap float-right justify-end align-middle gap-2 pl-2 lg:pl-0 w-full pt-2 lg:pt-0">
                        <div id="LL" className="w-full lg:w-auto">
                            {liveLink}
                        </div>
                        <div id="PL" className="w-full lg:w-auto">
                            {projectLink}
                        </div>
                </div>
                </div>
            </div>
            <div className="col-span-7">
                <p className="text-white lg:pt-1">{project.desc}</p>
                <p className="text-white pt-1 font-bold">Tags:</p>
                    <div id="tags_list" className="flex flex-row flex-wrap gap-y-2 gap-x-1">
                    {project.tags.map(e => <p className="rounded-full bg-secondary-1 px-1.5 py-0.5 bg-opacity-35 text-white font-normal shadow-md text-nowrap" key={e}>{e}</p>)}
                    </div>
            </div>

        </div>
    )
    return card
}