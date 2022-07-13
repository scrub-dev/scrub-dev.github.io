import projects from '../../info/projects'
import '../css/projects.css'
import ProjectGrid from '../projectgrid'

const ProjectsSection = () => {
  return (
    <div id='grid-container'>
      <div id='projects-title'>
        <span>Projects.</span>
      </div>
      <ProjectGrid projects={projects()}/>
    </div>
  )
}

export default ProjectsSection