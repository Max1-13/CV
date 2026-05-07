import { useState, useEffect } from 'react';

function Reviews() {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/10/comments`);
        const data = await response.json();
        setComments(data);
      } catch (error) {
        console.error("Error loading comments:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchComments();
  }, []);

  return (
    <section className="group relative bg-white dark:bg-slate-800 p-6 md:p-8 rounded-2xl mb-8 shadow-sm border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-blue-400 dark:hover:border-blue-500">
      <h2 id="reviews" className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-6 pb-2 border-b-2 border-slate-100 dark:border-slate-700 inline-block">
        Employer comments
      </h2>

      <div className="space-y-4">
        {isLoading ? (
          <p className="text-slate-500 dark:text-slate-400 italic">Loading comments...</p>
        ) : (
            comments.map((comment) => (
            <div 
              key={comment.id} 
              className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-xl border border-slate-100 dark:border-slate-600 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-slate-800 dark:text-slate-100 text-lg capitalize">{comment.name}</h3>
              <span className="text-blue-500 dark:text-blue-400 text-sm mb-2 block">{comment.email}</span>
              <p className="text-slate-600 dark:text-slate-300">"{comment.body}"</p>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default Reviews;