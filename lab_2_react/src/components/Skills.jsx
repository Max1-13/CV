function Skills() {
  return (
    <section className="group relative bg-white p-6 md:p-8 rounded-2xl mb-8 shadow-sm border border-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-blue-400">
      <h2 id="skills" className="text-2xl font-bold text-blue-700 mb-6 pb-2 border-b-2 border-slate-100 inline-block">
        Skills
      </h2>
      
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-slate-800 mb-3">Soft skills</h3>
        <ul className="flex flex-wrap gap-2">
          {['Teamwork', 'Leadership', 'Concentration', 'Preciseness', 'Fast-learner'].map(skill => (
            <li key={skill} className="bg-slate-100 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium border border-slate-200 hover:bg-slate-200 transition-colors">
              {skill}
            </li>
          ))}
        </ul>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold text-slate-800 mb-3">Hard skills</h3>
        <ul className="flex flex-wrap gap-2">
          {['Python', 'C', 'C#', 'PHP', 'JavaScript', 'HTML', 'CSS', 'React', 'Tailwind', 'CORS testing', 'XSS prevention', 'SQL Injection detection', 'Git', 'PyCharm', 'VS Code', 'Wireshark', 'Nmap', 'Figma'].map(skill => (
            <li key={skill} className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium border border-blue-200 hover:bg-blue-100 hover:shadow-sm transition-all">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;