import me from '../data/person.json'
import hamburger from '../utils/hamburger'
export default () => {return (
    <div className="inline-flex bg-black py-4 w-full flow-root">
        <div className="pl-4 float-left">
            <p className='text-white'>
                <span className=' underline underline-offset-4 hover:text-purple-400'>{me.name_short.toLowerCase()}@portfolio: /www/website</span>
                <span className='text-green-500 pl-1'>$</span>
                <span className='pl-1 animate-blinking'>_</span>
            </p>
        </div>
        <div className='text-white float-right inline-flex pr-4'>
        <p>cd</p>
        <button className='px-1'>./about-me</button>
        <button className='px-1'>./projects</button>
        <button className='px-1'>./cv.pdf</button>
        </div>
    </div>
)}