import { features } from "../../data/features"
import Feature from "./feature"

export default () => {
    return (
    <div className="flex min-h-max lg:h-screen px-4" id="features">
        <div className="m-auto">
            <p className="text-4xl text-secondary-1 border-b-secondary-2 border-b-2 pb-2 uppercase font-bold">Features.</p>
            <div className="p-4">
                <div className="flex flex-col gap-2 w-full h-full">
                    {features.map(f => (<Feature key={f.date.getTime()} feature={f}/>))}
                </div>
            </div>
        </div>
    </div>
    )
}