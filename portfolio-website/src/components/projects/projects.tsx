import { FC } from "react"
import getProjects from "../../utils/getProjects"
import { ProjectCard } from "./projectCard"

export const Projects: FC = () => {
    const projects = getProjects()
    return (<>
        {projects.map((e,i) => <ProjectCard {...e} key={""+i + e.name}/>)}
    </>)
}