import { project_information } from '../info/projects'
import Project from './project'
import './css/projectgrid.css'
const ProjectGrid = (props: any) => {
  let projects: project_information[] = props.projects
  return (
    <div id='grid'>
      {projects.map(project => (<Project project={project}/>))}
    </div>
  )
}

export default ProjectGrid