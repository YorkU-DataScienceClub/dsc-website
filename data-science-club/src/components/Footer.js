import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-title">FOLLOW US OUT THERE</p>
        <div className="social-buttons">
          {/* Instagram Button */}
          <a 
            href="https://www.instagram.com/yorku_dsc/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-button"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
              alt="Instagram"
              className="social-icon"
            />
          </a>
          {/* LinkedIn Button */}
          <a 
            href="https://www.linkedin.com/company/yorku-data-science-club/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-button"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
              alt="LinkedIn"
              className="social-icon"
            />
          </a>
        </div>
        <p className="linktree-text">
          <a
            href="https://linktr.ee/yorkudatascience?fbclid=PAZXh0bgNhZW0CMTEAAaYcKPXjzK3C5lYLtuXR1ykaVPkCGN0ct-GQ7qGhMsG289Q2jBSwuz9_8NU_aem_RD-yJIkLzQCEWSeQxbhKgQ"
            target="_blank"
            rel="noopener noreferrer"
            className="linktree-link"
          >
            Linktree
          </a>.
        </p>
      </div>
      <p className="footer-copyright">
        Copyright © 2024 Data Science Club at York University.
      </p>
    </footer>
  );
}

export default Footer;
