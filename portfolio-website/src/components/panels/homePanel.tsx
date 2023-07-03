import { FC } from "react"
import me from '../../data/person.json'
export const HomePanel: FC = () => {
    return (
        <div id="home" className="min-h-screen flex justify-center bg-slate-950 ">
            <div className="container py-[40%] md:py-[20%] px-[10%]">
                <p className="text-3xl"><span className="text-green-400">$&gt;</span><span className="text-white"> Hi, I'm {me.name_short}. 👋 </span></p>
                <p className="text-3xl"><span className="text-green-400">$&gt;</span><span className="text-white"> Welcome to my portfolio.</span></p>
                <p className="text-3xl"><span className="text-green-400">$&gt;</span><span className="text-white"> Feel free to have a look around</span></p>
                <p className="text-3xl"><span className="text-green-400">$&gt;</span><span className="text-white animate-blinking"> _</span></p>
            </div>
        </div>
    )
}
