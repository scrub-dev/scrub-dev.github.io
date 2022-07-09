import './components/css/App.css';
import Footer from './components/footer';
import './components/navbar'
import Navbar from './components/navbar';
import Section from './components/section';
function App() {
  return (
    <div className="App">
      <header>
        <Navbar/>
      </header>
      <main>
        <Section bg="yellow"/>
        <Section bg="green"/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
