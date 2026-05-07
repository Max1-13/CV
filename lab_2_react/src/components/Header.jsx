function Header({ theme, toggleTheme }) {
  return (
    <header className="sticky top-4 z-50 mb-10">
      <div className="flex flex-col md:flex-row justify-between items-center bg-blue-600/95 dark:bg-slate-800/95 backdrop-blur-md text-white p-5 rounded-2xl shadow-lg border border-blue-500/30 dark:border-slate-700 transition-all">
        <h1 className="text-2xl font-bold tracking-wide mb-4 md:mb-0">
          My resume
        </h1>
        <nav>
          <ol className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm font-medium">
            <li><a href="#about-me" className="hover:text-blue-200 transition-colors">About me</a></li>
            <li><a href="#education" className="hover:text-blue-200 transition-colors">Education</a></li>
            <li><a href="#experience" className="hover:text-blue-200 transition-colors">General experience</a></li>
            <li><a href="#skills" className="hover:text-blue-200 transition-colors">Skills</a></li>
            <li><a href="#contact-info" className="hover:text-blue-200 transition-colors">Contact</a></li>
          </ol>
        </nav>

        <button 
          onClick={toggleTheme}
          className="mt-4 md:mt-0 ml-0 md:ml-4 bg-white/20 hover:bg-white/30 dark:bg-slate-700 dark:hover:bg-slate-600 text-white font-semibold py-2 px-4 rounded-full backdrop-blur-sm transition-all text-sm border border-white/30 dark:border-slate-600"
        >
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
      </div>
    </header>
  );
}

export default Header;