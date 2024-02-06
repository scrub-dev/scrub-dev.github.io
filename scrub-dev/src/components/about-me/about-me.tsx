import { get_current_age } from "../../util/time"
import personal_information from '../../data/personal_information.json'
import Skilllist from "./skills/skilllist"
import Edulist from "./edu/edulist"

export default () => {
    return (
    <div className="flex min-h-screen" id="about-me">
        <div className="m-auto">
            <p className="text-4xl text-secondary-1 border-b-secondary-2 border-b-2 pb-2 uppercase font-bold">About Me.</p>
            <div id="me" className="py-2 pr-4">
                <p className="pt-2 text-white opacity-80">I'm {get_current_age()} and from the great city of {personal_information.loc.city} where I currently reside.</p>
                <p className="text-white opacity-80">My main interests lie around software development and problem solving (GCHQ challenge books were always a favourite). I am a big advocate for proper STEM Education and accessibility due to my background with ASD and the schooling system.</p>
            </div>
            <Skilllist/>
            <Edulist/>
        </div>
    </div>
    )
}