const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <a 
          href="https://github.com/Alejandro2097" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-icon hover:scale-110 transition-transform duration-200"
        >
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
        </a>
        <a 
          href="https://twitter.com/alejandro_huertas" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-icon hover:scale-110 transition-transform duration-200"
        >
          <img src="/assets/twitter.svg" alt="twitter" className="w-1/2 h-1/2" />
        </a>
        <a 
          href="https://linkedin.com/in/alejandro-huertas" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-icon hover:scale-110 transition-transform duration-200"
        >
          <img src="/assets/linkedin.svg" alt="linkedin" className="w-1/2 h-1/2" />
        </a>
      </div>

      <p className="text-white-500">© 2024 Alejandro Huertas. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
