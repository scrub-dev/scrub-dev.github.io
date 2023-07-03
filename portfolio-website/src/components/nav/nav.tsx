import me from '../../data/person.json'
import NavButtons from './navButtons'
export default () => {return (
    <div className="inline-flex bg-black py-4 w-full fixed">
        <div className="pl-4 float-left">
            <p className='text-white'>
                <span className=' underline underline-offset-4 hover:text-purple-400'>{me.name_short.toLowerCase()}@portfolio: /www/website</span>
                <span className='text-green-500 px-1'>$&gt;</span>
                <div className='hidden sm:inline-block'>
                    <NavButtons/>
                </div>
                <div className='sm:hidden flex items-center'>
                    <NavButtons/>
                </div>
                <span className='hidden sm:inline-block px-1 animate-blinking'>_</span>
            </p>
        </div>
    </div>
)}