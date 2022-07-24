import './css/section.css'
const Section = (props : any) => {
  let content : any = props.content
  return (
    <section id={props.id} style={{backgroundColor: props.bg}}>
      {content}
    </section>
  )
}

export default Section