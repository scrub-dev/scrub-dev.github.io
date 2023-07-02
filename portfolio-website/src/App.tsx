import './App.css'
import setTitle from './utils/setTitle'
import titles from './data/titles.json'
import me from './data/person.json'
import Nav from './components/nav'
import Footer from './components/footer'


function App() {
  // setTitle(titles.app_title)
  // console.log(titles)
  return (
    <>
      <Nav/>
      {setTitle(titles.app_title)}
      <h1>{me.name_short}</h1>
      <Footer/>
    </>
  )
}

export default App
