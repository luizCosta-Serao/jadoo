import React from 'react'
import ItemDestination from './ItemDestination'
import DestinationOne from '@/assets/home/top-destinations/destination-1.jpg'
import DestinationTwo from '@/assets/home/top-destinations/destination-2.jpg'
import DestinationThree from '@/assets/home/top-destinations/destination-3.jpg'
import styles from './TopDestinations.module.css'

const TopDestinations = () => {
  return (
    <section className={`${styles.topDestinations} container`}>
      <h3 className={styles.subtitle}>Top Selling</h3>
      <h1 className={styles.title}>Top Destinations</h1>
      <ul className={styles.listDestinations}>
        <ItemDestination img={DestinationOne} title='Rome, Italy' price='$5,42k' days='10 Days Trip' />
        <ItemDestination img={DestinationTwo} title='London, UK' price='$4.2k' days='12  Days Trip' />
        <ItemDestination img={DestinationThree} title='Full Europe' price='$15k' days='28 Days Trip' />
      </ul>
    </section>
  )
}

export default TopDestinations