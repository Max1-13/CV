import { useState, useEffect } from 'react';

function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  const handleBackdropClick = (event) => {
    if (event.target.id === 'modal-backdrop') {
      setIsOpen(false);
    }
  };

  return (
    <div 
      id="modal-backdrop"
      className="fixed inset-0 bg-slate-900/60 dark:bg-slate-900/80 backdrop-blur-sm z-50 flex justify-center items-center p-4 transition-all"
      onClick={handleBackdropClick}
    >
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl w-full max-w-md relative overflow-hidden dark:border dark:border-slate-700">
        
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-slate-400 hover:text-red-500 dark:hover:text-red-400 text-3xl leading-none transition-colors"
        >
          &times;
        </button>
        
        <div className="p-8">
          <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-2">Feedback</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
            You have been on the site for 1 minute! Please leave your contacts.
          </p>
          
          <form action="https://formspree.io/f/xlgzljqe" method="POST" className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Name</label>
              <input type="text" id="name" name="name" required 
                className="w-full px-4 py-2 bg-transparent dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:text-white outline-none transition-all" />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
              <input type="email" id="email" name="email" required 
                className="w-full px-4 py-2 bg-transparent dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:text-white outline-none transition-all" />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Phone number</label>
              <input type="tel" id="phone" name="phone" 
                className="w-full px-4 py-2 bg-transparent dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:text-white outline-none transition-all" />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Message</label>
              <textarea id="message" name="message" rows="3" required 
                className="w-full px-4 py-2 bg-transparent dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:text-white outline-none transition-all resize-none"></textarea>
            </div>
            
            <button type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-lg transition-colors shadow-md hover:shadow-lg mt-4">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;