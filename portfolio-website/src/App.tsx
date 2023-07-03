import './App.css'
import setTitle from './utils/setTitle'
import titles from './data/titles.json'
import Nav from './components/nav/nav'
import Footer from './components/footer/footer'
import { HomePanel } from './components/panels/homePanel'
import { InfoPanel } from './components/panels/informationPanel'
import { ProjectPanel } from './components/panels/projectPanel'

function App() {

  return (
    <>
      {setTitle(titles.app_title)}
      <Nav/>
      <HomePanel/>
      <InfoPanel/>
      <ProjectPanel/>
      <Footer/>
    </>
  )
}

export default App
