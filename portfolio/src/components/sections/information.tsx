import '../css/information.css'
import personal from "../../info/personal"

const InformationSection = () => {
  return (
    <div className="container">
      <h2><span id='section-title'>About Me.</span></h2>
      <div id='about-me'>
        <p>
          👋 Hi, my name is {personal().name_short}, 
            I am a student based in Newcastle-upon-tyne 
            and have just completed a BSc in Computer Science 
            at Northumbria University, achieving a first with honours overall!
        </p>
        <p>
          Currently, I am in the process of completing an MSc in Advanced Computer Science, 
          also at Northumbria University.
        </p>
        <p>
          I have participated in the past 3 consecutive Hacktoberfests and also represent NU at 
          Showcode's Unicode competition. Furthermore also competing in a Game Jam for college.
        </p>
        <p>
          My knowledge and skills extend past the computer screen. While not infront of the keyboard, I enjoy Scouting
          and being outdoors.
          Being a Scout leader has taught me how to effectively lead a team as well as providing crucial skills such as
          First-Aid and Safe-guarding. 
        </p>
        <p>
          I enjoy and set out to create projects that improve society or allow more people to access technology, please don't
          hesitate to get in touch or click the CV button to get a copy of my CV!
        </p>
      </div>      
    </div>
  )
}

export default InformationSection