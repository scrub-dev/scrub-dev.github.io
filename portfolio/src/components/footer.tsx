import personal from "../info/personal"
import footer from './css/footer.module.css'

export const Footer = () => 
    <footer className={footer.footer}>
      <span className={footer.footer_content}>&#169; {personal().name_long} {new Date().getFullYear()}</span>
    </footer>