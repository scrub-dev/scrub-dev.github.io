import { project_information } from '../info/projects'
import {Project} from './project'
import style from './css/row.module.css'
export const ProjectGrid = (props: any) => <div className={style.row}> {props.projects.map((project: JSX.IntrinsicAttributes & project_information)  => (<Project {...project}/>))} </div>
