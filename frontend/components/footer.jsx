// Footer.jsx

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} <span className="brand">D-tech</span>. All rights reserved.</p>
      
      <div className="socials">
       <a href="https://github.com/" target="_blank" rel="noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
