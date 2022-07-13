import { project_information } from '../info/projects'
import './css/project.css'

const Project = (props: any) => {
  let project: project_information = props.project

  return (
    <div className="card">
      <h1>{project.name}</h1>
      <p>{project.description}</p>
      <div className="project-links">
        { project.github_link ? (<a className="project-link" target="_blank" rel="noreferrer" href={project.github_link}>Github</a>) : ""}
        { project.project_link ? (<a className="project-link" target="_blank" rel="noreferrer" href={project.project_link}>Project</a>) : ""}
      </div>
    </div>
  )
}

export default Project  