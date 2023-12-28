import { Link } from "react-router-dom"
import { get_projects } from "../../util/projects"
// import { NavButton } from "../navigation/nav-button"
import ProjectCard from "./project-card"

export default () => {
    return (
        <div className="pt-[18%] h-screen" id="projects">
            <p className="text-4xl text-secondary-1 border-b-secondary-2 border-b-2 pb-2 uppercase font-bold">Projects.</p>
            {/* <NavButton name="View project archive" location="/project-archive"/> */}
            <Link to="/project-archive">
                <div className="group flex pt-2 w-max transition-all uppercase">
                <span className=" text-white mr-2 group-hover:text-secondary-1 group-hover:font-extrabold">&gt;</span>
                <p className=" text-white tracking-widest hover:mx-2 hover:text-secondary-2 transition-all">Project Archive</p>
                </div>
            </Link>
            <div className="p-4">
                {get_projects({filter: "FEATURED"}).map(proj => <ProjectCard project={proj} key={proj.name}/>)}
            </div>
        </div>
    )
}