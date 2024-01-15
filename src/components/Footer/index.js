import {
  FaInstagram,
  FaPinterestSquare,
  FaTwitterSquare,
  FaFacebookSquare,
} from 'react-icons/fa'

import './index.css'

export default function Footer() {
  return (
    <div data-testid="footer" className="footer-container">
      <div className="footer-logo-container">
        <img
          src="https://res.cloudinary.com/doofdbsu7/image/upload/v1693331248/footerlogo_aw4rtn.svg"
          alt="footer-logo"
          className="footer-logo"
        />
        <h1 className="footer-heading">Tasty Kitchens </h1>
      </div>
      <p className="footer-para">
        The only thing we are serious about is food. Contact us on
      </p>
      <div className="icons-container">
        <FaPinterestSquare
          data-tesid="pintrest-social-icon"
          className="social-media-icon"
        />
        <FaInstagram
          data-testid="instagram-social-icon"
          className="social-media-icon"
        />
        <FaTwitterSquare
          data-testid="twitter-social-icon"
          className="social-media-icon"
        />
        <FaFacebookSquare
          data-testid="facebook-social-icon"
          className="social-media-icon"
        />
      </div>
    </div>
  )
}
