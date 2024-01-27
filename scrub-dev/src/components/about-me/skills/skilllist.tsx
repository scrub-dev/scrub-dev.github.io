import personal_information from '../../../data/personal_information.json'
import Skill from './skill'

export default () => {
    let skilllist = personal_information.skills

    return (
        <div id='skills' className='mx-2'>
            <p className='text-2xl text-secondary-1 border-b-secondary-2 border-b pb-1 uppercase font-bold'>Skills.</p>
            <div className='flex flex-wrap 2xl:w-[70%] w-full pt-2'>
                {skilllist.map((e,i) => <Skill skill={e} key={i + e}/>)}
            </div>
        </div>
    )
}