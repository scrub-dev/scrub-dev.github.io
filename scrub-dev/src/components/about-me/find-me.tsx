
/// <reference types="vite-plugin-svgr/client" />

import SVG_linkedin from "../../assets/linkedin.svg?react"
import SVG_github from "../../assets/github.svg?react"
import SVG_codewars from "../../assets/codewars.svg?react";

export default () => {

    const links = [
        {"name": "github", "url": "https://www.codewars.com/users/scrub-dev/", "icon" : <SVG_codewars fill='white' width={40} className='opacity-80 hover:opacity-100 svg-hover'/>},
        {"name": "linkedin", "url": "https://github.com/scrub-dev", "icon" : <SVG_github fill='white' width={40} className='opacity-80 hover:opacity-100 svg-hover'/>},
        {"name": "codewars", "url": "https://linkedin.com/in/scrub-dev/", "icon" : <SVG_linkedin fill='white' width={40} className='opacity-80 hover:opacity-100 svg-hover'/>}
    ]


    return (
        <div className="pl-10 flex gap-5">
            {links.map(link => <a href ={link.url} key={link.name} target="_blank">{link.icon}</a>)}
        </div>
    )
}