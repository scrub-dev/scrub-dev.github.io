import {Footer} from './components/footer';
import {Navbar} from './components/navbar';
import {Section} from './components/style/section';
import {InformationSection} from './components/sections/information';
import {ProjectsSection} from './components/sections/projects';
import {TitleSection} from './components/sections/title';

export const App = () => 
    <div className="App">
      <header>
        <Navbar/>
      </header>
      <main>
        <Section bg="#546e7a" id="title" content={TitleSection()}/>
        <Section bg="#455a64" id="info" content={InformationSection()}/>
        <Section bg="#37474f" id="projects" content={ProjectsSection()}/>
      </main>
      <Footer/>
    </div>


// export default App;
