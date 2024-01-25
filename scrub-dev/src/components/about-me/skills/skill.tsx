export default (props: {skill: string}) => {
    return (
        <p className="text-white text-opacity-80 text-center px-2 mx-1 rounded-full bg-secondary-1 mt-1 bg-opacity-40">• {props.skill}</p>
    )
}