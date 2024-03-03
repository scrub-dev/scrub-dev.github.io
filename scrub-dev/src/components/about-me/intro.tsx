import capitalise from "../../util/capitalise"
import personal_data from "../../data/personal_information.json"

export default () => {
    return (
    <div className="pl-10">
        <span>
            <p className='text-white text-2xl'>Hello, my name is...</p>
            <p className='text-secondary-1 text-4xl lg:text-7xl'><strong>{capitalise(personal_data.name.long, {type: "SENTENCE"})}.</strong></p>
            <p className='text-secondary-2 text-2xl lg:text-4xl'>Full Stack Software Developer</p>
        </span>
    </div>)
}