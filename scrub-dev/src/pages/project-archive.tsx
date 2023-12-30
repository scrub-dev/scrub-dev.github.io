import { NavButton } from "../components/navigation/nav-button"
import ProjectCard from "../components/projects/project-card"
import { get_projects } from "../util/projects"
export default () => {


    const projectLink = (project: project) => (<>
        {project.project_link ?
            <a className="text-tertiary-1 hover:transition-all hover:text-tertiary-2" href={project.project_link} target="_blank">Project</a>
            : null}
        </>)


        const liveLink = (project: project) =>(<>
        {project.live_link ?
            <a className="text-tertiary-1 hover:transition-all hover:text-tertiary-2" href={project.live_link} target="_blank">Live</a>
        : null}
        </>)


    return (
        <div className="lg:container mt-10 lg:m-auto w-[100vw]">
            <p className="text-4xl text-secondary-1 border-b-secondary-2 border-b-2 pb-2 uppercase font-bold pl-2">Project Archive</p>
            <div className="pl-2">
                <NavButton name={"Go Back"} location="/"/>
            </div>
            <div className="lg:hidden w-full flex flex-col gap-2 justify-center items-center px-2">
                {get_projects({filter: "ALL"}).map(proj => <ProjectCard project={proj} key={proj.name}/>)}
            </div>
            <div className="hidden lg:flex w-full mt-20">
                <table className="w-full table-auto">
                    <thead className="text-white text-left border-b-secondary-2 border-b-2">
                        <tr>
                            <th>Year</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th className="pr-10">Links</th>
                            <th>Tags</th>
                        </tr>
                    </thead>
                    <tbody>
                        {get_projects({filter: "ALL"}).sort((a,b) => +b.year - +a.year).map(project =>
                            <tr className="text-white border-b-secondary-1 border-opacity-70 border-b-2 p-10" key={project.name+project.year}>
                                <td className="p-5">{project.year}</td>
                                <td className="p-5">{project.name}</td>
                                <td>{project.desc}</td>
                                <td>
                                    <p>{liveLink(project)}</p>
                                    <p>{projectLink(project)}</p>
                                </td>
                                <td>{project.tags.join(", ")}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}