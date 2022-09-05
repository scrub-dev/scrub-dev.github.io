import { project_information } from '../info/projects'
import './css/project.css'

export const Project: React.FC<project_information> = ({name, description, github_link, project_link}) => 
    <div className="card">
      <h1>{name}</h1>
      <p>{description}</p>
      <div className="project-links">
        {github_link ? (<a className="project-link" target="_blank" rel="noreferrer" href={github_link}>Github</a>) : ""}
        {project_link ? (<a className="project-link" target="_blank" rel="noreferrer" href={project_link}>Project</a>) : ""}
      </div>
    </div>
