import React from 'react'
//Images
import MoneyMan from './imgs/money-man.png';

//CSS
import styles from './css/Hero.module.css';

const HeroComponent = () => {
  return (
    <div>
			<img className={styles.heroImage} src={MoneyMan} alt="money-man image"></img>
		</div>  
  )
}

export default HeroComponent