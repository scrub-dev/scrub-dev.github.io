import { project_information } from '../info/projects'
import {Project} from './project'
import './css/projectgrid.css'
export const ProjectGrid = (props: any) => <div id='grid'> {props.projects.map((project: JSX.IntrinsicAttributes & project_information)  => (<Project {...project}/>))} </div>
