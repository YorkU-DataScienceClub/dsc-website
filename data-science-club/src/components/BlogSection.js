// src/components/BlogSection.js
import React from 'react';

function BlogSection() {
  return (
    <section id="blogs" className="section">
      <div className="container">
        <h2>Latest Blog Posts</h2>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="card h-100">
              <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Blog 1" />
              <div className="card-body">
                <h5 className="card-title">The Future of Data Science</h5>
                <p className="card-text">Explore the latest trends and innovations in data science.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="card h-100">
              <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Blog 2" />
              <div className="card-body">
                <h5 className="card-title">Getting Started with Machine Learning</h5>
                <p className="card-text">A beginner's guide to understanding machine learning concepts.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="card h-100">
              <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Blog 3" />
              <div className="card-body">
                <h5 className="card-title">Data Visualization Techniques</h5>
                <p className="card-text">Learn how to effectively visualize and communicate data insights.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
