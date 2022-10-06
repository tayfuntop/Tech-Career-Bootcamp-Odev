import "./Footer.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faYoutube, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <div className="footer">
      <h4>Contact Me</h4>
      <div>
        <a href="https://github.com/Razumihin41">
          <FontAwesomeIcon className="icon" icon={faGithub} />
        </a>
        <a href="https://www.youtube.com/c/TayfunTp">
          <FontAwesomeIcon className="icon" icon={faYoutube} />
        </a>
        <a href="https://www.instagram.com/tayfun_tp/">
          <FontAwesomeIcon className="icon" icon={faInstagram} />
        </a>
        <a href="https://www.linkedin.com/in/tayfun-top-b7574220a/">
          <FontAwesomeIcon className="icon" icon={faLinkedin} />
        </a>
      </div>
    </div>
  )
}

export default Footer