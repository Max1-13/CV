import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 bg-slate-50 min-h-screen font-sans">
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