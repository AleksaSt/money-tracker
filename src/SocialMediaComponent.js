import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook , faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
//CSS
import styles from './css/SocialMedia.module.css';

const SocialMediaComponent = () => {
  return (
    <>
    <div className={styles.container}>
      {/* <FontAwesomeIcon className={styles.socialMedia} icon="fa-brands fa-facebook-f" /> */}
      <FontAwesomeIcon className={styles.socialMedia} icon={faFacebook} />
      <FontAwesomeIcon className={styles.socialMedia} icon={faTwitter} />
      <FontAwesomeIcon className={styles.socialMedia} icon={faInstagram} />
      <FontAwesomeIcon className={styles.socialMedia} icon={faLinkedin} />
    </div>
    </>
  )
}

export default SocialMediaComponent