import { NavButton } from "./nav-button"
import { TNavEntry } from "./nav_types"

export default () => {

    const locations: TNavEntry[] = [
        {name:"about me", location: "#about-me"},
        {name:"features", location: "#features"},
        {name:"projects", location: "#projects"},
        // {name:"resume", link:"https://docs.google.com/viewer?url=https://raw.githubusercontent.com/scrub-dev/me/main/files/CV_24_ScottDonaldson.pdf"}

    ]

    return  <div className="grid grid-cols-1">
                {locations.map(l => <NavButton name={l.name} link={l.link} location={l.location} key={l.name}/>)}
            </div>
}