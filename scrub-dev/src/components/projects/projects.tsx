import { get_projects } from "../../util/projects"
import { NavButton } from "../navigation/nav-button"
import ProjectCard from "./project-card"

export default () => {
    return (
        <div className="pt-[18%] h-screen" id="projects">
            <p className="text-4xl text-secondary-1 border-b-secondary-2 border-b-2 pb-2 uppercase font-bold">Projects.</p>
            <NavButton name="View project archive" location="/project-archive"/>
            <div className="p-4">
                {get_projects({filter: "FEATURED"}).map(proj => <ProjectCard project={proj}/>)}
            </div>
        </div>
    )
}