import personal from '../../info/personal'
import '../css/title.css'

const TitleSection = () => {
  return (
    <div id='container'>
      <div id='title-box'>
      <h1 className='typewriter-text'>
        <span className='name-anim'>Hi, I'm {personal().name_short}.</span>
        <span className='title-anim'>Full stack developer</span>
      </h1>
      </div>
    </div>
  )
}

export default TitleSection