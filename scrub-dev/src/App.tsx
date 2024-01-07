import AboutMe from './components/about-me/about-me'
import FindMe from './components/about-me/find-me'
import Intro from './components/about-me/intro'
import Features from './components/features/features'
import Nav from './components/navigation/nav'
import Projects from './components/projects/projects'

import './style.css'

function App() {
  return (
    <div>
      <div className='grid lg:grid-cols-1 xl:grid-cols-10'>
        <div id='col1' className='h-svh lg:h-full lg:col-span-4 bg-gradient-to-r from-main-dark to-main'>
          <div className='sticky mt-[30%] mb-20 xl:pl-20 xl:mt-0 xl:mb-0 xl:top-[15%] h-auto'>
            <Intro/>
            <FindMe/>
            <Nav/>
          </div>
        </div>
        <div id='col2' className='col-span-1 lg:col-span-6 bg-gradient-to-r from-main to-main-dark'>
          <AboutMe/>
          <Features/>
          <Projects/>
        </div>
      </div>
    </div>
  )
}
export default App
