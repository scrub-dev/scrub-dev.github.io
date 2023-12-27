import { projects } from "../data/project_archive"
import { get_current_year } from "./time"

export const get_projects = (opts: projects_opts) => {

    switch(opts.filter){
        case "ALL": return projects
        case "FEATURED": return projects.filter(proj => proj.featured)
        case "RECENT": return projects.filter(proj => +proj.year > (get_current_year() - 2))
    }

}