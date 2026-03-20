import BinaryBackground from './Components/BinaryBackground';
import About from './Seccions/About';
import { NavBar } from './Layouts/NavBar';
import { Projects } from './Seccions/Projects';
import { Footer } from './Layouts/Footer';
import { Contact } from './Seccions/Contact';
import './App.css'

function App() {
  return (
    <div className='relative min-h-screen overflow-hidden'>
      <BinaryBackground />
      <NavBar />
      <main>
        <About id="about" className="h-auto scroll-mt-24" />
        <Projects id="projects" className="h-auto scroll-mt-24" />
        <Contact id="contact" className="h-auto scroll-mt-24" />
      </main>
      <Footer />
    </div>
  );
  } 

  export default App;