import personal from '../../info/personal'
import style from '../css/title.module.css'
import shapes from '../css/shapes.module.css'

export const TitleSection = () => 
  <div className={style.container}>
  <div id='shapes' >
    <div className={[shapes.gradient_1, shapes.square_1, shapes.transparency_on_hover].join(" ")}></div>
    <div className={[shapes.gradient_2, shapes.square_2, shapes.transparency_on_hover].join(" ")}></div>
    <div className={[shapes.gradient_3, shapes.square_3, shapes.transparency_on_hover].join(" ")}></div>
    <div className={[shapes.gradient_4, shapes.square_4, shapes.transparency_on_hover].join(" ")}></div>
    <div className={[shapes.gradient_5, shapes.square_5, shapes.transparency_on_hover].join(" ")}></div>
  </div>
    <h1 className={[style.shadow, style.passthrough].join(" ")}>
      <span className={style.hello_world}>Hello World!</span>
      <div className={style.typewriter_text}>
        <span className={style.name_anim}>I'm {personal().name_short}.</span>
        <span className={style.title_anim}>Full stack developer</span>
      </div>
    </h1>
  </div>