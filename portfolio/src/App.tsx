import {Footer} from './components/footer';
import {Navbar} from './components/navbar';
import {Section} from './components/style/section';
import {InformationSection} from './components/sections/information';
import {ProjectsSection} from './components/sections/projects';
import {TitleSection} from './components/sections/title';

// background: rgb(2,0,36);
//background: linear-gradient(45deg, rgba(2,0,36,1) 0%, rgba(154,0,114,1) 100%);


export const App = () => 
    <div className="App">
      <header>
        <Navbar/>
      </header>
      <main>
        <Section bg="linear-gradient(45deg, rgba(2,0,36,1) 0%, rgba(154,0,114,1) 100%)" id="title" content={TitleSection()}/>
        <Section bg="linear-gradient(135deg, rgba(2,0,36,1) 0%, rgba(154,0,114,1) 100%)" id="info" content={InformationSection()}/>
        <Section bg="linear-gradient(45deg, rgba(2,0,36,1) 0%, rgba(154,0,114,1) 100%)" id="projects" content={ProjectsSection()}/>
      </main>
      <Footer/>
    </div>


// export default App;
