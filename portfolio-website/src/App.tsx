import './App.css'
import setTitle from './utils/setTitle'
import titles from './data/titles.json'
import me from './data/person.json'
import Nav from './components/nav/nav'
import Footer from './components/footer/footer'
import getAge from './utils/getAge'


function App() {

  return (
    <>
      {setTitle(titles.app_title)}
      <Nav/>
      <Footer/>
    </>
  )
}

export default App
