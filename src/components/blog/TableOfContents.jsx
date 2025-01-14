const TableOfContents = ({ content }) => {
  const headings = content.match(/<h[2-3][^>]*>(.*?)<\/h[2-3]>/g) || [];
  const toc = headings.map(heading => ({
    title: heading.replace(/<[^>]+>/g, ''),
    level: heading.charAt(2)
  }));

  return (
    <div className="card border-0 shadow-sm mb-4">
      <div className="card-body">
        <h5 className="card-title mb-3">İçindekiler</h5>
        <ul className="list-unstyled">
          {toc.map((item, index) => (
            <li 
              key={index}
              className={`mb-2 ${item.level === '3' ? 'ms-3' : ''}`}
            >
              <a href={`#heading-${index}`} className="text-decoration-none">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}; 