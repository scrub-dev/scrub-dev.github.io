import projects from '../data/projects.json'
import { TProject } from '../types'

export default () => {
    let projectList: TProject[] = projects.projects.map(e => <TProject>{name: e.projectName, desc: e.projectDescription, tech: e.technologies, gh_link: e.github_link || null, prod_link: e.production_link || null})
    return projectList
}