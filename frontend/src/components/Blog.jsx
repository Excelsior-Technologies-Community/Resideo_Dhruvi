import React, { useState, useEffect } from 'react';
import './Blog.css';

const Blog = () => {
  const [articles, setArticles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/articles');
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };
    fetchArticles();
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? articles.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === articles.length - 1 ? 0 : prevIndex + 1));
  };

  if (articles.length === 0) return <div className="text-center py-5">Loading...</div>;

  const currentArticle = articles[currentIndex];

  const getImageUrl = (imageName) => {
    return new URL(`../assets/${imageName}`, import.meta.url).href;
  };

  return (
    <div className="blog-section py-5" style={{ backgroundColor: '#f6f7f9', minHeight: '80vh' }}>
      <div className="container py-4">
        <div className="mb-5">
          <h2 className="fw-bold fs-1 text-dark">Latest Articles</h2>
          <p className="text-muted fs-6">Read our latest articles on real estate, architecture, interior design, and more</p>
        </div>

        <div className="row">
            <div className="col-12">
                <div className="blog-carousel-container">
                    <div className="blog-image-wrapper">
                        <img 
                        src={getImageUrl(currentArticle.image)} 
                        alt={currentArticle.title} 
                        className="blog-image"
                        />
                        {currentArticle.featured === 1 && (
                        <span className="badge bg-dark rounded-pill featured-badge px-3 py-2">FEATURED</span>
                        )}
                    </div>
                    
                    <div className="blog-content-card bg-white p-4 p-md-5">
                        <p className="text-muted small fw-bold mb-2" style={{ letterSpacing: '1px' }}>{currentArticle.category}</p>
                        <h3 className="fw-bold mb-3">{currentArticle.title}</h3>
                        <p className="text-muted mb-4">{currentArticle.description}</p>
                        <a href="#" className="fw-bold text-decoration-none read-article-link">
                        READ ARTICLE <span className="read-article-line"></span>
                        </a>
                    </div>
                </div>

                <div className="blog-controls mt-4">
                    <button className="btn p-0 me-4 text-dark" onClick={handlePrev}>
                        <i className="fa-solid fa-arrow-left-long fs-4" style={{ color: '#555' }}></i>
                    </button>
                    <button className="btn p-0 text-dark" onClick={handleNext}>
                        <i className="fa-solid fa-arrow-right-long fs-4" style={{ color: '#555' }}></i>
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
