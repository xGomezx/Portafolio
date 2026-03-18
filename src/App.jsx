import BinaryBackground from './Components/BinaryBackground';
import About from './Seccions/About';
import { NavBar } from './Layouts/NavBar';
import { Projects } from './Seccions/Projects';
import { Footer } from './Layouts/Footer';

function App() {
  return (
    <div className='w-screen h-screen relative overflow-x-hidden'>
      <BinaryBackground />
      <NavBar />
      <main>
        <About />
        <Projects />
      </main>
      <Footer />
    </div>
  );
  } 

  export default App;