import React, { useState } from 'react';

const SavePost = ({ post }) => {
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    const savedPosts = JSON.parse(localStorage.getItem('savedPosts') || '[]');
    
    if (isSaved) {
      const newSavedPosts = savedPosts.filter(p => p.id !== post.id);
      localStorage.setItem('savedPosts', JSON.stringify(newSavedPosts));
    } else {
      savedPosts.push(post);
      localStorage.setItem('savedPosts', JSON.stringify(savedPosts));
    }
    
    setIsSaved(!isSaved);
  };

  return (
    <button
      className={`btn ${isSaved ? 'btn-primary' : 'btn-outline-primary'} rounded-pill`}
      onClick={handleSave}
    >
      <i className={`bi bi-bookmark${isSaved ? '-fill' : ''} me-2`}></i>
      {isSaved ? 'Kaydedildi' : 'Kaydet'}
    </button>
  );
};

export default SavePost; 