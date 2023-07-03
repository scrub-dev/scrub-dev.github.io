import { FC } from "react"
import { TProject } from "../../types"

export const ProjectCard: FC<TProject> = (props) => {
    return (
    <div className="m-2 p-2 rounded-lg shadow hover:-translate-y-1 duration-300 bg-slate-700">
        <div>
            <span className=" text-white font-bold">&#123;<br></br></span>
            <span className=" text-white">"name":</span>
            <span className="text-white font-semibold underline">"{props.name}",</span>
        </div>
        <div>
            <span className=" text-white">"desc":</span>
            <span className="text-white">"{props.desc}",</span>
        </div>
        <div className="">
            <span className="text-white ">"tech":</span>
            <span className="text-white">&#91;{props.tech.map(e => `"${e}"`).join(",")}&#93;</span>
        </div>
        <div>
            <span className="text-white">"links": </span>
            <span className="text-white">&#123;</span>
            {(props.gh_link) ? <span className="text-white"> "<a href={props.gh_link} target="_blank" className="underline">github</a>" </span>: ""}
            {(props.prod_link) ? <span className="text-white">, "<a href={props.prod_link} target="_blank" className="underline">live</a>" </span>: ""}

            <span className="text-white">&#125;</span>
        </div>
        <span className="text-white font-bold">&#125;</span>
    </div>)
}