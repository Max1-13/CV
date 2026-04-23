function Experience() {
  return (
    <section className="group relative bg-white p-6 md:p-8 rounded-2xl mb-8 shadow-sm border border-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-blue-400">
      <h2 id="experience" className="text-2xl font-bold text-blue-700 mb-6 pb-2 border-b-2 border-slate-100 inline-block">
        General experience
      </h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-slate-800 mb-1">Job</h3>
          <p className="text-slate-600">Plotter cutting specialist (2 months). Talked to customers, took orders.</p>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold text-slate-800 mb-1">Marathons</h3>
          <p className="text-slate-600">Passed programming marathons from the <b className="text-blue-600">GoIT</b> company.</p>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold text-slate-800 mb-1">Volunteer work</h3>
          <p className="text-slate-600">Participated in weaving nets for the military.</p>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold text-slate-800 mb-2">Languages</h3>
          <ul className="list-disc pl-5 text-slate-600 space-y-1 marker:text-blue-500">
            <li>Native: Ukrainian</li>
            <li>English (B2 level)</li>
            <li>Japanese (A1 level)</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;