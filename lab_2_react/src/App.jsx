import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <AboutMe />
        <Education />
        <Experience />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}

export default App;