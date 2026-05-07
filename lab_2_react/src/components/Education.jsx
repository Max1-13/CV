function Education() {
  return (
    <section className="group relative bg-white dark:bg-slate-800 p-6 md:p-8 rounded-2xl mb-8 shadow-sm border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-blue-400 dark:hover:border-blue-500">
      <h2 id="education" className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-6 pb-2 border-b-2 border-slate-100 dark:border-slate-700 inline-block">
        Education
      </h2>
      
      <div className="border-l-4 border-blue-500 pl-4 py-1">
        <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">
          NATIONAL UNIVERSITY LVIV POLYTECHNIC
        </h3>
        <span className="inline-block bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-sm font-semibold px-3 py-1 rounded-full mt-2 mb-3">
          2023 - Up to now
        </span>
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
          Department of information protection. Institute of Computer technologies, automation and metrology. <strong>Bachelor of cyber security.</strong>
        </p>
      </div>
    </section>
  );
}

export default Education;