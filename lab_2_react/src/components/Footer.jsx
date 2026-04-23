function Footer() {
  return (
    <footer className="bg-slate-800 text-slate-300 text-center p-8 rounded-2xl mt-12 shadow-inner">
      <address id="contact-info" className="not-italic">
        <h2 className="text-2xl font-bold text-white mb-6">Contact information</h2>
        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-12 text-lg">
          <p className="flex items-center justify-center gap-2">
            <span className="text-slate-400">Phone:</span> 
            <a href="tel:+000000000000" className="text-blue-400 hover:text-blue-300 hover:underline underline-offset-4 transition-colors">
              (+000) 00-000-00-00
            </a>
          </p>
          <p className="flex items-center justify-center gap-2">
            <span className="text-slate-400">Email:</span> 
            <a href="mailto:fake@gmail.com" className="text-blue-400 hover:text-blue-300 hover:underline underline-offset-4 transition-colors">
              fake@gmail.com
            </a>
          </p>
        </div>
      </address>
    </footer>
  );
}

export default Footer;