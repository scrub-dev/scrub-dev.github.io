import { project_information } from '../info/projects'
import './css/project.css'

const Project = (props: any) => {
  let project: project_information = props.project

  return (
    <div className="card">
      <h1>{project.name}</h1>
      <p>{project.description}</p>
      { project.github_link ? (<a target="_blank" rel="noreferrer" href={project.github_link}>Github</a>) : ""}
      { project.project_link ? (<a target="_blank" rel="noreferrer" href={project.project_link}>Project</a>) : ""}
    </div>
  )
}

export default Project