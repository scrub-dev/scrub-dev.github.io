import { FC } from "react"
import { Projects } from "../projects/projects"
export const ProjectPanel: FC = () => {
    return (
    <div id="projects" className="h-screen bg-slate-800">
        <div className="container pt-[10%]">
            <p className="font-semibold text-3xl"><span className=" text-green-400">$&gt;</span><span className="text-white">cat *-project.json</span></p>
            <div className="grid grid-flow-row gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <Projects/>
            </div>
            <p className="font-semibold text-3xl"><span className=" text-green-400">$&gt;</span><span className="text-white animate-blinking">_</span></p>
        </div>
    </div>

    )
}