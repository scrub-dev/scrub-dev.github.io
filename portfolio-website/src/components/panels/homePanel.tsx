import { FC } from "react"
import me from '../../data/person.json'
export const HomePanel: FC = () => {
    return (
        <div className="h-screen flex justify-center bg-slate-950">
            <div className="container pt-[10%] px-[10%] mx-auto">
                <p className="text-3xl"><span className="text-green-400">$&gt;</span><span className="text-white"> Hi, I'm {me.name_short}. 👋 </span></p>
                <p className="text-3xl"><span className="text-green-400">$&gt;</span><span className="text-white"> Welcome to my portfolio.</span></p>
                <p className="text-3xl"><span className="text-green-400">$&gt;</span><span className="text-white"> Feel free to have a look around</span><span className='px-3 animate-blinking'>_</span></p>
            </div>
            {/* <div className="text-white bg-black relative bottom-[100px] p-5 rounded-2xl border-4 border-black shadow-2xl bg-opacity-70">
                <h1 className="text-5xl text-center">👋 Hi, I'm {me.name_short}</h1>
                <h1 className="text-5xl text-center">Feel free to take a look around!</h1>
            </div> */}
        </div>
    )
}
