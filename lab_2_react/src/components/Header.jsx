function Header() {
  return (
    <header className="sticky top-4 z-50 mb-10">
      <div className="flex flex-col md:flex-row justify-between items-center bg-blue-600/95 backdrop-blur-md text-white p-5 rounded-2xl shadow-lg border border-blue-500/30 transition-all">
        <h1 className="text-2xl font-bold tracking-wide mb-4 md:mb-0">
          My resume
        </h1>
        <nav>
          <ol className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm font-medium">
            <li><a href="#about-me" className="hover:text-blue-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300 rounded px-1">About me</a></li>
            <li><a href="#education" className="hover:text-blue-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300 rounded px-1">Education</a></li>
            <li><a href="#experience" className="hover:text-blue-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300 rounded px-1">General experience</a></li>
            <li><a href="#skills" className="hover:text-blue-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300 rounded px-1">Skills</a></li>
            <li><a href="#contact-info" className="hover:text-blue-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300 rounded px-1">Contact</a></li>
          </ol>
        </nav>
      </div>
    </header>
  );
}

export default Header;