import React, { useState, useEffect } from 'react';
import axios from 'axios';
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

  const [articles1, setArticles1] = useState([]);

  useEffect(() => {
      fetchArticles1();
  }, []);

  const fetchArticles1 = async () => {
      try {
          const res = await axios.get("http://localhost:5000/api/blog-articles");
          setArticles1(res.data);
      } catch (error) {
          console.log(error);
      }
  };

  if (articles.length === 0) return <div className="text-center py-5">Loading...</div>;

  const currentArticle = articles[currentIndex];

  const getImageUrl = (imageName) => {
    return new URL(`../assets/${imageName}`, import.meta.url).href;
  };

  const recentArticles = articles1.slice(0, 5);


  return (
    <>
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

<div className="interior-blog-main-wrapper container-fluid">
            <div className="container">

                <div className="row">

                    {/* LEFT SIDE */}
                    <div className="col-lg-9">
                        <div className="row">

                            {articles1.map((item) => (

                                <div className="col-lg-6 mb-5" key={item.id}>

                                    <div className="interior-blog-card-box">

                                        <div className="interior-blog-image-wrapper">
                                            <img
                                                src={getImageUrl(item.image)}
                                                alt=""
                                                className="img-fluid interior-blog-main-image"
                                            />
                                        </div>

                                        <div className="interior-blog-content-box">

                                            <span className="interior-blog-category-text">
                                                {item.category}
                                            </span>

                                            <h2 className="interior-blog-title-text">
                                                {item.title}
                                            </h2>

                                            <p className="interior-blog-date-text">
                                                {item.article_date}
                                            </p>

                                        </div>

                                    </div>

                                </div>

                            ))}

                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="col-lg-3">

                        <div className="interior-blog-sidebar-main">

                            {/* SEARCH */}
                            <div className="interior-blog-search-box">

                                <h4 className="interior-blog-sidebar-heading">
                                    Search Articles
                                </h4>

                                <div className="interior-blog-search-input-wrapper">

                                    <input
                                        type="text"
                                        placeholder=""
                                        className="form-control interior-blog-search-input"
                                    />

                                    <i className="fa-solid fa-magnifying-glass interior-blog-search-icon"></i>

                                </div>

                            </div>

                            {/* RECENT ARTICLES */}
                            <div className="interior-blog-recent-articles-box">

                                <h4 className="interior-blog-sidebar-heading">
                                    Recent Articles
                                </h4>

                                {recentArticles.map((item) => (

                                    <div
                                        className="interior-blog-recent-single-item"
                                        key={item.id}
                                    >

                                        <img
                                            src={getImageUrl(item.image)}
                                            alt=""
                                            className="interior-blog-recent-image"
                                        />

                                        <p className="interior-blog-recent-title">
                                            {item.title}
                                        </p>

                                    </div>

                                ))}

                            </div>

                            {/* CATEGORIES */}
                            <div className="interior-blog-categories-box">

                                <h4 className="interior-blog-sidebar-heading">
                                    Categories
                                </h4>

                                <ul className="interior-blog-category-list">

                                    <li>Apartments (1)</li>
                                    <li>Architecture (4)</li>
                                    <li>Living Room (1)</li>

                                </ul>

                            </div>

                            {/* TAGS */}
                            <div className="interior-blog-tags-box">

                                <h4 className="interior-blog-sidebar-heading">
                                    Tags
                                </h4>

                                <div className="interior-blog-tags-wrapper">

                                    <span>ARCHITECTURE</span>
                                    <span>DESIGN</span>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    </>
  );
};

export default Blog;
