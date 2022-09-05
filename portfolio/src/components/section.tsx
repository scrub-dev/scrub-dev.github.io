import './css/section.css'

type SectionProps = {
  bg: string;
  content: React.ReactNode;
  id: string;
}

export const Section: React.FunctionComponent<SectionProps> = ({bg, content, id}) => <section id={id} style={{backgroundColor: bg}}> {content} </section>