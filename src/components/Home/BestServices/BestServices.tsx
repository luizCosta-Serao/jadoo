import React from 'react'
import styles from './BestServices.module.css'
import ItemBestService from './ItemBestService'
import Satellite from '@/assets/home/best-services/satellite-dish.png'
import Plane from '@/assets/home/best-services/plane.png'
import Microphone from '@/assets/home/best-services/microphone.png'
import PowerSupply from '@/assets/home/best-services/power-supply 1.png'

const BestServices = () => {
  return (
    <section className={`${styles.bestServices} container`}>
      <h2 className={styles.category}>Category</h2>
      <h1 className={styles.title}>We Offer Best Services</h1>
      <ul className={styles.listBestServices}>
        <ItemBestService img={Satellite} title='Calculated Weather' description='Built Wicket longer admire do barton vanity itself do in it.' />
        <ItemBestService img={Plane} title='Best Flights' description='Engrossed listening. Park gate sell they west hard for the.' />
        <ItemBestService img={Microphone} title='Local Events' description='Barton vanity itself do in it. Preferd to men it engrossed listening. ' />
        <ItemBestService img={PowerSupply} title='Customization' description='We deliver outsourced aviation services for military customers' />
      </ul>
    </section>
  )
}

export default BestServices