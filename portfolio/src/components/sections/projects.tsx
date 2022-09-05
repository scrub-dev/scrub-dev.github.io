import projects from '../../info/projects'
import sectionStyle from '../css/projects.module.css'
import {ProjectGrid} from '../projectgrid'
import style from '../css/row.module.css'

export const ProjectsSection = () => 
    <div className={style.row_container}>
      <div className={sectionStyle.projects_title_container}>
        <span className={sectionStyle.projects_title}>Projects.</span>
      </div>
      <ProjectGrid projects={projects()}/>
    </div>