import personal from "../info/personal"

const Footer = () => {
  return (<span>&#169; {personal().name_long} {new Date().getFullYear()}</span>)
}

export default Footer