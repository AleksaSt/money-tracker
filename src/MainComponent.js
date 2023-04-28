import React from 'react'

//Components
import LoginModal from './LoginModal'
import HeroComponent from './HeroComponent'
import SocialMediaComponent from './SocialMediaComponent'

//CSS
import styles from './css/Main.module.css';

const MainComponent = () => {

  return ( 
		<>
			<div className={styles.container}>
				<div>
					<h6 className={styles.title}>MoneyTrackr</h6>
					<p>#1 Most downloaded money tracking application in the world!</p>
					<LoginModal/> 
					<p className={styles.socialMediaParagraph}>Find us on social media!</p>
					<SocialMediaComponent/>
				</div>              
				<HeroComponent/>
			</div> 	 
		</>
  )
}

export default MainComponent