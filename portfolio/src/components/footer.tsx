import personal from "../info/personal"

const Footer = () => {
  return (
    <footer>
      <span>&#169; {personal().name_long} {new Date().getFullYear()}</span>
    </footer>
  )
}

export default Footer