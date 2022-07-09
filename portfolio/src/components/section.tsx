import './css/section.css'
const Section = (props : any) => {
  return (
    <section style={{backgroundColor: props.bg}}>
      {props.content}
    </section>
  )
}

export default Section