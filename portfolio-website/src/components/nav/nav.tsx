import me from '../../data/person.json'
import NavButtons from './navButtons'
export default () => {return (
    <div className="inline-flex bg-black py-4 w-full flow-root">
        <div className="pl-4 float-left">
            <p className='text-white'>
                <span className=' underline underline-offset-4 hover:text-purple-400'>{me.name_short.toLowerCase()}@portfolio: /www/website</span>
                <span className='text-green-500 px-1'>$</span>
                <NavButtons/>
                <span className='px-1 animate-blinking'>_</span>
            </p>
        </div>
    </div>
)}