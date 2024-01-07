export default (props: {feature: feature}) =>{return (
<div className="">
    <iframe src={props.feature.embed}

        width={560}
        height={315}

        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="rounded block m-auto">
    </iframe>
</div>
)}