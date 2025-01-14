const BlogArchive = ({ posts }) => {
  const archives = posts.reduce((acc, post) => {
    const date = new Date(post.date);
    const month = date.toLocaleString('tr-TR', { month: 'long', year: 'numeric' });
    
    if (!acc[month]) {
      acc[month] = [];
    }
    acc[month].push(post);
    return acc;
  }, {});

  return (
    <div className="card border-0 shadow-sm hover-card mb-4">
      <div className="card-body">
        <h5 className="card-title mb-3">
          <i className="bi bi-calendar-week me-2"></i>
          Arşiv
        </h5>
        <div className="accordion">
          {Object.entries(archives).map(([month, posts]) => (
            <div className="accordion-item border-0" key={month}>
              <h6 className="accordion-header">
                <button className="accordion-button collapsed">
                  {month} ({posts.length})
                </button>
              </h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}; 