import VideoFrame from "./video-frame"

export default (props: {feature: feature}) => {
    return (
        <div className="bg-white bg-opacity-5 rounded-xl p-2">
            <div className="lg:flex lg:flex-row lg:gap-2">
                <div className="lg:order-last">
                    <p className="text-white text-bold border-b-secondary-1 border-b-2 mb-2 lg:mb-1 text-2xl">{props.feature.title} • {props.feature.date.toDateString().split(" ").slice(1).join(" ")}</p>
                    <p className="text-white hidden lg:block">{props.feature.desc}</p>
                </div>
                <div className="lg:order-first">
                    <VideoFrame feature={props.feature}/>
                </div>
            </div>

        </div>

    )
}