import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const categories = ['Tümü', 'Haberler', 'Etkinlikler', 'Turistik Rehber', 'Gastronomi'];

const blogPosts = [
  {
    id: 1,
    category: 'Haberler',
    title: 'Yeni Açık Hava Restoranımız Hizmete Girdi',
    image: 'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?ixlib=rb-4.0.3',
    date: '15 Mart 2024',
    description: 'Akdeniz mutfağının en seçkin lezzetlerini muhteşem deniz manzarası eşliğinde sunuyoruz.',
    content: `
      <p>Fethiye'nin eşsiz manzarasına karşı yeni restoranımızı açmanın mutluluğunu yaşıyoruz. Denize nazır konumu ve modern tasarımıyla misafirlerimize unutulmaz bir deneyim sunacak olan restoranımız, Akdeniz mutfağının en seçkin lezzetlerini sunuyor.</p>
      <p>Şef'imiz Ali Yılmaz'ın özel menüsünde, yerel malzemelerle hazırlanan geleneksel Türk mutfağının modern yorumları yer alıyor. Taze deniz ürünleri, organik sebzeler ve yerel üreticilerden temin edilen malzemelerle hazırlanan yemeklerimiz, damak zevkinize hitap edecek.</p>
      <h3>Özel Menümüz</h3>
      <p>- Fethiye'nin meşhur çipurası<br>- Ev yapımı mantı<br>- Keşkek<br>- Börek çeşitleri<br>- Yerel peynirler</p>
    `,
    author: 'John Doe',
    comments: [
      { id: 1, user: 'Alice', text: 'Harika görünüyor!', date: '16 Mart 2024' },
      { id: 2, user: 'Bob', text: 'Çok güzel bir mekan.', date: '17 Mart 2024' }
    ],
    tags: ['Restoran', 'Yemek', 'Açılış', 'Fethiye', 'Akdeniz Mutfağı'],
    views: 1250,
    likes: 45
  },
  {
    id: 2,
    category: 'Turistik Rehber',
    title: 'Fethiye\'nin En Güzel Plajları',
    image: 'https://images.unsplash.com/photo-1519451241324-20b4ea2c4220',
    date: '10 Mart 2024',
    description: 'Fethiye\'nin eşsiz plajlarını ve koylarını keşfedin.',
    content: `
      <p>Fethiye, Türkiye'nin en güzel plajlarına ev sahipliği yapıyor. İşte mutlaka görmeniz gereken plajlar:</p>
      <h3>1. Ölüdeniz</h3>
      <p>Dünyanın en güzel plajlarından biri olan Ölüdeniz, turkuaz suları ve beyaz kumsalıyla ünlü. Yamaç paraşütü için ideal bir nokta.</p>
      <h3>2. Kelebekler Vadisi</h3>
      <p>Sadece deniz yoluyla ulaşılabilen bu cennet köşesi, doğal güzelliği ve el değmemiş plajıyla büyülüyor.</p>
      <h3>3. Çalış Plajı</h3>
      <p>Günbatımının en güzel izlendiği plajlardan biri. 4 km uzunluğundaki sahil şeridi boyunca restoranlar ve kafeler bulunuyor.</p>
    `,
    author: 'Jane Smith',
    comments: [
      { id: 1, user: 'Charlie', text: 'Harika bir deniz manzarası!', date: '11 Mart 2024' },
      { id: 2, user: 'Diana', text: 'Çok güzel bir mekan.', date: '12 Mart 2024' }
    ],
    tags: ['Plaj', 'Deniz', 'Gezi', 'Fethiye', 'Ölüdeniz'],
    views: 2300,
    likes: 89
  },
  {
    id: 3,
    category: 'Etkinlikler',
    title: 'Fethiye Yamaç Paraşütü Festivali',
    image: 'https://images.unsplash.com/photo-1503220317375-aaad61436b1b',
    date: '8 Mart 2024',
    description: 'Bu yaz Babadağ\'da düzenlenecek yamaç paraşütü festivaline davetlisiniz.',
    content: `
      <p>Fethiye'nin simgesi haline gelen Babadağ'da bu yaz unutulmaz bir festival düzenleniyor. Dünyanın dört bir yanından profesyonel paraşütçülerin katılacağı festival, görsel bir şölene sahne olacak.</p>
      <h3>Festival Programı</h3>
      <p>- Akrobasi gösterileri<br>- Tandem atlayışlar<br>- Workshop'lar<br>- Canlı müzik performansları</p>
      <h3>Katılım</h3>
      <p>Festival herkese açık olup, tandem atlayışlar için önceden rezervasyon yapılması gerekmektedir.</p>
    `,
    author: 'Mike Wilson',
    comments: [
      { id: 1, user: 'Eve', text: 'Harika bir festival!', date: '9 Mart 2024' },
      { id: 2, user: 'Frank', text: 'Festivali çok beğendim.', date: '10 Mart 2024' }
    ],
    tags: ['Festival', 'Yamaç Paraşütü', 'Babadağ', 'Fethiye', 'Etkinlik'],
    views: 1800,
    likes: 67
  },
  {
    id: 4,
    category: 'Gastronomi',
    title: 'Fethiye\'nin Yerel Lezzetleri',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0',
    date: '5 Mart 2024',
    description: 'Fethiye mutfağının vazgeçilmez tatlarını keşfedin.',
    content: `
      <p>Fethiye mutfağı, Akdeniz'in taze malzemeleri ve geleneksel tarifleriyle ünlü. İşte mutlaka tatmanız gereken yerel lezzetler:</p>
      <h3>1. Çalkama</h3>
      <p>Fethiye'ye özgü bir kahvaltılık olan çalkama, zeytinyağı ve çökelek peynirinin muhteşem uyumu.</p>
      <h3>2. Fethiye Böreği</h3>
      <p>İnce açılmış yufkaların arasına serpilmiş peynir ve otlarla hazırlanan geleneksel börek.</p>
      <h3>3. Deniz Mahsulleri</h3>
      <p>Taze balık çeşitleri, kalamar ve karides gibi deniz ürünleri Fethiye mutfağının vazgeçilmezleri.</p>
    `,
    author: 'Sarah Johnson',
    comments: [
      { id: 1, user: 'Grace', text: 'Lezzetlerimi çok beğendim!', date: '6 Mart 2024' },
      { id: 2, user: 'Hank', text: 'Yerel lezzetleri denemeli.', date: '7 Mart 2024' }
    ],
    tags: ['Yemek', 'Gastronomi', 'Fethiye', 'Yerel Mutfak'],
    views: 1500,
    likes: 55
  },
  {
    id: 5,
    category: 'Turistik Rehber',
    title: 'Fethiye\'nin Antik Kentleri',
    image: 'https://images.unsplash.com/photo-1533104816931-20fa691ff6ca',
    date: '3 Mart 2024',
    description: 'Likya medeniyetinin izlerini taşıyan antik kentleri keşfedin.',
    content: `
      <p>Fethiye, antik Likya medeniyetinin en önemli yerleşim yerlerinden biri. Bölgede görülmesi gereken antik kentler:</p>
      <h3>1. Tlos Antik Kenti</h3>
      <p>Likya'nın en önemli şehirlerinden biri olan Tlos, kaya mezarları ve akropolü ile dikkat çekiyor.</p>
      <h3>2. Kayaköy</h3>
      <p>Terkedilmiş Rum köyü, tarihi dokusu ve mistik atmosferiyle ziyaretçilerini büyülüyor.</p>
      <h3>3. Letoon</h3>
      <p>UNESCO Dünya Mirası Listesi'nde yer alan antik kent, önemli bir dini merkez olarak kullanılmış.</p>
    `,
    author: 'David Brown',
    comments: [
      { id: 1, user: 'Ivy', text: 'Antik kentleri keşfetmek güzeldi.', date: '4 Mart 2024' },
      { id: 2, user: 'Jack', text: 'Fethiye\'nin tarihi için teşekkürler.', date: '5 Mart 2024' }
    ],
    tags: ['Tarih', 'Antik Kent', 'Fethiye', 'Likya', 'Kültür'],
    views: 1900,
    likes: 72
  },
  {
    id: 6,
    category: 'Etkinlikler',
    title: '12 Adalar Tekne Turu Rehberi',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5',
    date: '1 Mart 2024',
    description: 'Fethiye Körfezi\'nin masmavi sularında unutulmaz bir gün geçirin.',
    content: `
      <p>Fethiye'nin en popüler aktivitelerinden biri olan 12 Adalar tekne turu, eşsiz koylarda yüzme ve güneşlenme imkanı sunuyor.</p>
      <h3>Tur Programı</h3>
      <p>- Kızılada<br>- Delikli Ada<br>- Yassıcalar<br>- Göcek Adası<br>- Tersane Adası</p>
      <h3>Öneriler</h3>
      <p>- Güneş kremi ve şapka getirin<br>- Yüzme malzemelerinizi unutmayın<br>- Fotoğraf makinenizi yanınıza alın</p>
    `,
    author: 'Emily Wilson',
    comments: [
      { id: 1, user: 'Ian', text: '12 Adalar tekne turunu çok beğendim.', date: '2 Mart 2024' },
      { id: 2, user: 'Julia', text: 'Fethiye\'nin bu etkinliği için teşekkürler.', date: '3 Mart 2024' }
    ],
    tags: ['Tekne Turu', 'Deniz', 'Fethiye', '12 Adalar', 'Aktivite'],
    views: 2100,
    likes: 83
  }
];

const BlogPage = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('Tümü');
  const [selectedPost, setSelectedPost] = useState(null);
  const [comment, setComment] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);

  // Tüm etiketleri topla
  const allTags = useMemo(() => {
    const tags = new Set();
    blogPosts.forEach(post => post.tags.forEach(tag => tags.add(tag)));
    return Array.from(tags);
  }, []);

  // Popüler yazıları filtrele
  const popularPosts = useMemo(() => {
    return [...blogPosts]
      .sort((a, b) => b.views - a.views)
      .slice(0, 3);
  }, []);

  // Yazıları filtrele
  const filteredPosts = useMemo(() => {
    return blogPosts
      .filter(post => {
        // Kategori filtresi
        if (selectedCategory !== 'Tümü' && post.category !== selectedCategory) {
          return false;
        }
        
        // Arama filtresi
        if (searchQuery) {
          const searchLower = searchQuery.toLowerCase();
          return (
            post.title.toLowerCase().includes(searchLower) ||
            post.description.toLowerCase().includes(searchLower) ||
            post.tags.some(tag => tag.toLowerCase().includes(searchLower))
          );
        }

        // Etiket filtresi
        if (selectedTags.length > 0) {
          return selectedTags.every(tag => post.tags.includes(tag));
        }

        return true;
      });
  }, [selectedCategory, searchQuery, selectedTags]);

  const handleShare = (platform, post) => {
    const url = window.location.href;
    const text = `${post.title} - LuxHotel Blog`;

    switch(platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`);
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`);
        break;
      case 'whatsapp':
        window.open(`https://api.whatsapp.com/send?text=${text} ${url}`);
        break;
    }
  };

  const handleComment = () => {
    if (!comment.trim()) return;
    
    const newComment = {
      id: Date.now(),
      user: 'Misafir',
      text: comment,
      date: new Date().toLocaleDateString()
    };

    selectedPost.comments.push(newComment);
    setComment('');
  };

  return (
    <>
      {/* Hero Section */}
      <div className="blog-hero position-relative py-5 mb-5">
        <div className="overlay"></div>
        <div className="container py-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white position-relative py-5"
          >
            <h1 className="display-3 fw-bold mb-4">Blog & Haberler</h1>
            <p className="lead mb-0 fw-light">
              En son haberler, etkinlikler ve özel içeriklerimiz
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container pb-5">
        <div className="row g-4">
          {/* Sol Sidebar */}
          <div className="col-lg-3">
            {/* Arama */}
            <div className="card border-0 shadow-sm hover-card mb-4">
              <div className="card-body p-4">
                <h5 className="card-title fw-bold mb-3">
                  <i className="bi bi-search me-2"></i>
                  Ara
                </h5>
                <div className="input-group">
                  <input
                    type="search"
                    className="form-control border-end-0"
                    placeholder="Blog yazılarında ara..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <span className="input-group-text bg-white border-start-0">
                    <i className="bi bi-search text-muted"></i>
                  </span>
                </div>
              </div>
            </div>

            {/* Popüler Yazılar */}
            <div className="card border-0 shadow-sm hover-card mb-4">
              <div className="card-body p-4">
                <h5 className="card-title fw-bold mb-3">
                  <i className="bi bi-star me-2"></i>
                  Popüler Yazılar
                </h5>
                {popularPosts.map(post => (
                  <div key={post.id} className="mb-3 popular-post">
                    <div className="d-flex align-items-center">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="rounded-3"
                        style={{ width: '70px', height: '70px', objectFit: 'cover' }}
                      />
                      <div className="ms-3">
                        <h6 className="mb-1 fw-semibold">
                          <button
                            className="btn btn-link p-0 text-decoration-none text-dark"
                            onClick={() => setSelectedPost(post)}
                          >
                            {post.title}
                          </button>
                        </h6>
                        <div className="d-flex align-items-center">
                          <i className="bi bi-eye-fill text-primary me-1"></i>
                          <small className="text-muted">
                            {post.views.toLocaleString()} görüntülenme
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Etiketler */}
            <div className="card border-0 shadow-sm hover-card">
              <div className="card-body p-4">
                <h5 className="card-title fw-bold mb-3">
                  <i className="bi bi-tags me-2"></i>
                  Etiketler
                </h5>
                <div className="d-flex flex-wrap gap-2">
                  {allTags.map(tag => (
                    <button
                      key={tag}
                      className={`btn btn-sm ${
                        selectedTags.includes(tag)
                          ? 'btn-primary'
                          : 'btn-outline-primary'
                      } rounded-pill`}
                      onClick={() => {
                        setSelectedTags(prev =>
                          prev.includes(tag)
                            ? prev.filter(t => t !== tag)
                            : [...prev, tag]
                        );
                      }}
                    >
                      # {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Ana İçerik */}
          <div className="col-lg-9">
            {/* Kategori Filtreleri */}
            <div className="d-flex justify-content-center flex-wrap gap-2 mb-4">
              {categories.map(category => (
                <button
                  key={category}
                  className={`btn ${
                    selectedCategory === category
                      ? 'btn-primary'
                      : 'btn-outline-primary'
                  } rounded-pill px-4`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Blog Yazıları */}
            <div className="row g-4">
              {filteredPosts.map(post => (
                <motion.div
                  key={post.id}
                  className="col-md-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="card h-100 border-0 shadow-sm hover-card">
                    <div className="position-relative">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="card-img-top"
                        style={{ height: '250px', objectFit: 'cover' }}
                      />
                      <span className="badge bg-primary position-absolute top-0 end-0 m-3">
                        {post.category}
                      </span>
                    </div>
                    <div className="card-body p-4">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <div className="d-flex align-items-center">
                          <i className="bi bi-calendar3 me-2 text-primary"></i>
                          <small className="text-muted">{post.date}</small>
                        </div>
                        <div className="d-flex align-items-center">
                          <i className="bi bi-eye-fill me-2 text-primary"></i>
                          <small className="text-muted">{post.views}</small>
                        </div>
                      </div>
                      <h5 className="card-title fw-bold mb-3">{post.title}</h5>
                      <p className="card-text text-muted">{post.description}</p>
                      
                      {/* Etiketler */}
                      <div className="mb-3">
                        {post.tags.map(tag => (
                          <span
                            key={tag}
                            className="badge bg-light text-dark me-2"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <div className="d-flex justify-content-between align-items-center">
                        <button 
                          className="btn btn-link text-primary p-0 text-decoration-none"
                          onClick={() => setSelectedPost(post)}
                        >
                          Devamını Oku <i className="bi bi-arrow-right ms-1"></i>
                        </button>
                        <div className="d-flex gap-2">
                          <button 
                            className="btn btn-sm btn-outline-primary rounded-circle"
                            onClick={() => handleShare('facebook', post)}
                          >
                            <i className="bi bi-facebook"></i>
                          </button>
                          <button 
                            className="btn btn-sm btn-outline-primary rounded-circle"
                            onClick={() => handleShare('twitter', post)}
                          >
                            <i className="bi bi-twitter"></i>
                          </button>
                          <button 
                            className="btn btn-sm btn-outline-primary rounded-circle"
                            onClick={() => handleShare('whatsapp', post)}
                          >
                            <i className="bi bi-whatsapp"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Blog Post Modal */}
      {selectedPost && (
        <div className="modal fade show" style={{ display: 'block' }}>
          <div className="modal-dialog modal-lg modal-dialog-scrollable">
            <motion.div 
              className="modal-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="modal-header">
                <h5 className="modal-title">{selectedPost.title}</h5>
                <button 
                  type="button" 
                  className="btn-close"
                  onClick={() => setSelectedPost(null)}
                ></button>
              </div>
              <div className="modal-body">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="w-100 rounded-3 mb-4"
                  style={{ maxHeight: '400px', objectFit: 'cover' }}
                />
                <div dangerouslySetInnerHTML={{ __html: selectedPost.content }} />
                
                {/* Comments Section */}
                <div className="mt-5">
                  <h4>Yorumlar</h4>
                  {selectedPost.comments.map(comment => (
                    <div key={comment.id} className="card mb-3">
                      <div className="card-body">
                        <div className="d-flex justify-content-between">
                          <h6 className="card-subtitle mb-2 text-muted">{comment.user}</h6>
                          <small className="text-muted">{comment.date}</small>
                        </div>
                        <p className="card-text">{comment.text}</p>
                      </div>
                    </div>
                  ))}
                  
                  {/* Comment Form */}
                  <div className="mt-4">
                    <h5>Yorum Yap</h5>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Yorumunuzu yazın..."
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                      />
                      <button 
                        className="btn btn-primary"
                        onClick={handleComment}
                      >
                        Gönder
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </>
  );
};

export default BlogPage; 