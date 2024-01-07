import { get_current_age } from "../../util/time"
import personal_information from '../../data/personal_information.json'

export default () => {
    return (
    <div className="flex min-h-max pt-4 lg:h-screen px-4" id="about-me">
        <div className="m-auto">
            <p className="text-4xl text-secondary-1 border-b-secondary-2 border-b-2 pb-2 uppercase font-bold">About Me.</p>
            <div id="me" className="py-2 pr-4">
                <p className="pt-2 text-white opacity-80">I'm {get_current_age()} and from the great city of {personal_information.loc.city} where I currently reside.</p>
                <p className="pt-2 text-white opacity-80">My first entry into development surrounded writing Discord bots in Discord.JS later expanding to C# .NET to write small helper tools such as an <span className="opacity-100 font-bold">ID3 Tag Editor.</span></p>
                <p className="pt-2 text-white opacity-80">Volunteering has always been a passion, I was a cub-scout then a scout for many years, eventually becoming a young-leader then leader, progressing to having my own troop at the age of 20, only hindered by COVID when we had to close the Scout Hut we occipied.</p>
            </div>
            <div id="education" className="py-2 pr-4">
                <p className="text-2xl text-white opacity-80">Education...</p>
                <p className="text-white opacity-80">Put simply, I started on a bad foot and refused to attend school, going through the special education system implemented at the time. This meant I had no formal education in technology until college when I broke out of the system and started a <span className="opacity-100 font-bold">Games Design Extended Diploma</span>. I owe this to being primarily self-taught and exploring technology and software on my own, spending hours producing and debugging my own little tools.</p>
                <p className="pt-2 text-white opacity-80">Formal Education started in college where I achieved a triple distinction start. This grade allowed me to receive the Rutherford Scholarship of Academic Excellence from Northumbria University where I partook in a <span className="opacity-100 font-bold">BSc Computer Science with Honours Degree</span>. During my undergraduate I led the Computer Society for two years and ran the social side of the department throughout, this included completing the degree through the many COVID Lockdowns. Finally, I graduated in 2022 with a <span className="opacity-100 font-bold">First with Honours</span>. This degree allowed to to show my potential after being self-taught for many years and allowed me to put into practice my knowledge on subjects by producing products and software through a range of different techniques and technologies.</p>
                <p className="pt-2 text-white opacity-80">As of December 2023 I am coming up on completing my Postgraduate <span className="opacity-100 font-bold">MSc Advanced Computer Science Degree</span> and looking for further work.</p>
            </div>
        </div>
    </div>
    )
}