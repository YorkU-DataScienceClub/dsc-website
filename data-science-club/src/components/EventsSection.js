import React from 'react';

function EventsSection() {
  return (
    <section id="events" className="section" data-aos="fade-in">
      <h2>Upcoming Events</h2>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card h-100" data-aos="zoom-in">
              <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Event 1" />
              <div className="card-body">
                <h5 className="card-title">AI in Healthcare</h5>
                <p className="card-text">Discover how AI is transforming the healthcare industry.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100" data-aos="zoom-in">
              <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Event 1" />
              <div className="card-body">
                <h5 className="card-title">AI in Healthcare</h5>
                <p className="card-text">Discover how AI is transforming the healthcare industry.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100" data-aos="zoom-in">
              <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Event 1" />
              <div className="card-body">
                <h5 className="card-title">AI in Healthcare</h5>
                <p className="card-text">Discover how AI is transforming the healthcare industry.</p>
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </section>
  );
}

export default EventsSection;
