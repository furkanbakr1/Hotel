const ReadingTime = ({ content }) => {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);

  return (
    <div className="d-flex align-items-center text-muted">
      <i className="bi bi-clock me-2"></i>
      <small>{readingTime} dakika okuma</small>
    </div>
  );
}; 