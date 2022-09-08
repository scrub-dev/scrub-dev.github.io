import { project_information } from '../info/projects'
import rng from '../utils/rng'
import style from './css/project.module.css'
import shapes from './css/shapes.module.css'

export const Project: React.FC<project_information> = ({name, description, github_link, project_link}) => {
  let random_gradient_num = rng([1,5])
  let gradients: string[] = [shapes.gradient_1,shapes.gradient_2,shapes.gradient_3,shapes.gradient_4,shapes.gradient_5]
  let random_gradient: string = gradients[random_gradient_num];
  return (
    <div className={[style.card, shapes.float_on_hover, random_gradient].join(" ")}>
      <h1>{name}</h1>
      <p>{description}</p>
      <div className={style.project_links}>
        {github_link ? (<a className={style.project_link} target="_blank" rel="noreferrer" href={github_link}>Github</a>) : ""}
        {project_link ? (<a className={style.project_link} target="_blank" rel="noreferrer" href={project_link}>Project</a>) : ""}
      </div>
    </div>
  )
}