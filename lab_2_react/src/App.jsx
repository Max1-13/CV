import { useState, useEffect } from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Reviews from './components/Reviews';         // new component
import ContactForm from './components/ContactForm'; // new component

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const currentHour = new Date().getHours();
    const isDayTime = currentHour >= 7 && currentHour < 21;
    setTheme(isDayTime ? 'light' : 'dark');
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 bg-slate-50 dark:bg-slate-900 min-h-screen font-sans transition-colors duration-300 dark:text-slate-200">
      
      <Header theme={theme} toggleTheme={toggleTheme} />
      
      <main>
        <AboutMe />
        <Education />
        <Experience />
        <Skills />
        <Reviews />
      </main>
      
      <Footer />
      
      <ContactForm />
      
    </div>
  );
}

export default App;