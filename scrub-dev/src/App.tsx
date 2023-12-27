import AboutMe from './components/about-me/about-me'
import FindMe from './components/about-me/find-me'
import Intro from './components/about-me/intro'
import Nav from './components/navigation/nav'
import Projects from './components/projects/projects'
import './style.css'

function App() {
  return (
    <div className='grid lg:grid-cols-1 xl:grid-cols-10'>
      <div id='col1' className='lg:col-span-4 '>
        <div className='sticky mt-[30%] mb-20 lg:pl-20 lg:mt-0 lg:mb-0 lg:top-[15%]'>
          <Intro/>
          <FindMe/>
          <Nav/>
        </div>
      </div>
      <div id='col2' className='lg:col-span-6'>
        {/* {Array.from(Array(100).keys()).map(e => <p className='text-white' key={e}>HI</p>)} */}
        <AboutMe/>
        <Projects/>
      </div>
    </div>

  )
}

export default App
