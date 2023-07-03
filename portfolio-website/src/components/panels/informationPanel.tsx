import { FC } from "react"
import me from '../../data/person.json'
import getAge from "../../utils/getAge"
export const InfoPanel: FC = () => {
    const text = `
    Hi! Im ${me.name_short}, a ${getAge()} year old Software Developer from Newcastle upon Tyne.
    I am currently studying for my MSc in Advanced Computer Science at Northumbria.
    Welcome to my portfolio website where I showcase some of my projects!
    My current focus surrounds full stack development and competitive programming.
    `
    return (
    <div id="info" className="min-h-screen flex justify-center bg-slate-900">
        <div className="container py-[30%] md:py-[10%] px-[10%] mx-auto">
        <p className="text-3xl"><span className="text-green-400">$&gt;</span><span className="text-white"> cat about-me.txt</span></p><br></br>
        <p className="text-white text-3xl pl-10">{text}</p><br></br>
        <p className="text-3xl"><span className="text-green-400">$&gt;</span><span className="text-white"> cat *-link.svg</span></p>
        <div className="py-5 pl-10 grid grid-flow-row gap-2 grid-cols-4">
            {me.links.map(e => <span className="flex"><a target="_blank" href={e.url}>{e.icon ? <img src={e.icon} className="scale-50"></img> : e.name}</a></span>)}
            <span><a target="_blank" href={"mailto: " + me.email}><img src="/assets/email.svg" className="scale-50"></img></a></span>
        </div>
        <p className="text-3xl"><span className="text-green-400">$&gt;</span><span className="text-white animate-blinking"> _</span></p>
        </div>
    </div>
    )
}