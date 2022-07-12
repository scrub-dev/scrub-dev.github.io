import projects from '../../info/projects'
import '../css/projects.css'
import ProjectGrid from '../projectgrid'

const ProjectsSection = () => {
  return (
    <div>
      <ProjectGrid projects={projects()}/>
    </div>
  )
}

export default ProjectsSection