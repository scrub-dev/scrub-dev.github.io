import './css/section.css'
const Section = (props : any) => {
  let content : any = props.content
  return (
    <section style={{backgroundColor: props.bg}}>
      {content}
    </section>
  )
}

export default Section