import projects from '../../info/projects'
import '../css/projects.css'
import {ProjectGrid} from '../projectgrid'

export const ProjectsSection = () => 
    <div id='grid-container'>
      <div id='projects-title'>
        <span>Projects.</span>
      </div>
      <ProjectGrid projects={projects()}/>
    </div>