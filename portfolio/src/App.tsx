import './components/css/App.css';
import Footer from './components/footer';
import './components/navbar'
import Navbar from './components/navbar';
import Section from './components/section';
import InformationSection from './components/sections/information';
import ProjectsSection from './components/sections/projects';
import TitleSection from './components/sections/title';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar/>
      </header>
      <main>
        <Section bg="#37474f" content={TitleSection()}/>
        <Section bg="#455a64" content={InformationSection()}/>
        <Section bg="#546e7a" content={ProjectsSection()}/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
