import personal from '../../info/personal'
import style from '../css/title.module.css'

export const TitleSection = () =>
  <div className={style.container}>
    <div id='title-box'>
      <h1 className={style.typewriter_text}>
        <span className={style.name_anim}>Hi, I'm {personal().name_short}.</span>
        <span className={style.title_anim}>Full stack developer</span>
      </h1>
    </div>
  </div>