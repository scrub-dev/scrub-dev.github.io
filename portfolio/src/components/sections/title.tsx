import personal from '../../info/personal'
import style from '../css/title.module.css'

export const TitleSection = () =>
  <div className={style.container}>
    <div>
      <h1>
        <span className={style.hello_world}>Hello World!</span>
        <div className={style.typewriter_text}>
          <span className={style.name_anim}>I'm {personal().name_short}.</span>
          <span className={style.title_anim}>Full stack developer</span>
        </div>
      </h1>
    </div>
  </div>