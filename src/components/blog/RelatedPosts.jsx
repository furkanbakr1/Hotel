const RelatedPosts = ({ currentPost, posts }) => {
  // Aynı kategorideki veya benzer etiketlere sahip yazıları göster
  const relatedPosts = posts
    .filter(post => 
      post.id !== currentPost.id && 
      (post.category === currentPost.category || 
       post.tags.some(tag => currentPost.tags.includes(tag)))
    )
    .slice(0, 3);

  return (
    <div className="related-posts mt-5">
      <h4 className="mb-4">İlgili Yazılar</h4>
      <div className="row g-4">
        {relatedPosts.map(post => (
          <div key={post.id} className="col-md-4">
            <div className="card border-0 shadow-sm hover-card h-100">
              <img src={post.image} alt={post.title} className="card-img-top" />
              <div className="card-body">
                <h6>{post.title}</h6>
                <small className="text-muted">{post.date}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 