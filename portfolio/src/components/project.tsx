import { project_information } from '../info/projects'
import style from './css/project.module.css'

export const Project: React.FC<project_information> = ({name, description, github_link, project_link}) => 
    <div className={style.card}>
      <h1>{name}</h1>
      <p>{description}</p>
      <div className={style.project_links}>
        {github_link ? (<a className={style.project_link} target="_blank" rel="noreferrer" href={github_link}>Github</a>) : ""}
        {project_link ? (<a className={style.project_link} target="_blank" rel="noreferrer" href={project_link}>Project</a>) : ""}
      </div>
    </div>
