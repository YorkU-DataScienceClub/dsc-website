import React from 'react';

function TeamSection() {
  return (
    <section id="team" className="section" data-aos="fade-in">
      <div className="container">
        <h2>Meet Our Team</h2>
        <div className="row text-center">
          <div className="col-md-3 mb-4 team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member 1" className="img-fluid" />
            <h5>Sadia Tasnim</h5>
            <p>President</p>
          </div>
          <div className="col-md-3 mb-4 team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member 2" className="img-fluid" />
            <h5>Mohammed Ashraful Islam</h5>
            <p>Vice President</p>
          </div>
          <div className="col-md-3 mb-4 team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member 3" className="img-fluid" />
            <h5>Sourish Dayalan</h5>
            <p>Head of Marketing</p>
          </div>
          <div className="col-md-3 mb-4 team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member 3" className="img-fluid" />
            <h5>Fahad Khan</h5>
            <p>Treasurer</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
