import { FC } from "react"
import me from '../../data/person.json'
export const HomePanel: FC = () => {
    return (
        <div className="h-screen flex items-center justify-center bg-[url(/assets/bg.svg)] bg-cover">
            <div className="text-white bg-black relative bottom-[100px] p-5 rounded-2xl border-4 border-black shadow-2xl bg-opacity-70">
                <h1 className="text-5xl text-center">👋 Hi, I'm {me.name_short}</h1>
                <h1 className="text-5xl text-center">Feel free to take a look around!</h1>
            </div>
        </div>
    )
}
