import { useState, useEffect } from 'react';

function Footer() {
  const [systemInfo, setSystemInfo] = useState({ os: '', browser: '' });

  useEffect(() => {
    const currentSystemData = {
      os: navigator.platform,
      browser: navigator.userAgent
    };

    localStorage.setItem('userSystemInfo', JSON.stringify(currentSystemData));

    const savedDataString = localStorage.getItem('userSystemInfo');
    
    if (savedDataString) {
      setSystemInfo(JSON.parse(savedDataString));
    }
  }, []);
  
  return (
    <footer className="bg-slate-800 dark:bg-slate-950 text-slate-300 text-center p-8 rounded-2xl mt-12 shadow-inner transition-colors duration-300">
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

      {systemInfo.os && (
        <div className="mt-8 pt-6 border-t border-slate-700 text-sm text-slate-400 text-left md:text-center">
          <p>
            <strong className="text-slate-300">Your OS:</strong> {systemInfo.os}
          </p>
          <p className="mt-2">
            <strong className="text-slate-300">Browser:</strong> {systemInfo.browser}
          </p>
        </div>
      )}
    </footer>
  );
}

export default Footer;