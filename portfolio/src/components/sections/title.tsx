import personal from '../../info/personal'
import style from '../css/title.module.css'
import shapes from '../css/shapes.module.css'

export const TitleSection = () =>
  <div className={style.container}>
    <div>
        <div className={shapes.square_1}></div>
        <div className={shapes.square_2}></div>
        <div className={shapes.square_3}></div>
        <div className={shapes.square_4}></div>
        <div className={shapes.square_5}></div>
      <h1 className={style.shadow}>
        <span className={style.hello_world}>Hello World!</span>
        <div className={style.typewriter_text}>
          <span className={style.name_anim}>I'm {personal().name_short}.</span>
          <span className={style.title_anim}>Full stack developer</span>
        </div>
      </h1>
    </div>
  </div>