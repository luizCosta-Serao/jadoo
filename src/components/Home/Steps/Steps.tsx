import Image from 'next/image'
import React from 'react'
import ChooseDestination from '@/assets/home/steps/choose-destination.png'
import MakePayment from '@/assets/home/steps/make-payment.png'
import ReachAirport from '@/assets/home/steps/reach-airport.png'
import ImgDecoration from '@/assets/home/steps/image-decoration.png'
import styles from './Steps.module.css'

const Steps = () => {
  return (
    <section className={`${styles.steps} container`}>
      <div className={styles.stepsContent}>
        <h2 className={styles.stepsSubtitle}>Easy and Fast</h2>
        <h1 className={styles.stepsTitle}>Book your next trip in 3 easy steps</h1>
        <ul className={styles.listSteps}>
          <li className={styles.stepItem}>
            <Image src={ChooseDestination} alt='' width={47} height={48} sizes='100vw'/>
            <div>
              <h2>Choose Destination</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. </p>
            </div>
          </li>
          <li className={styles.stepItem}>
            <Image src={MakePayment} alt='' width={47} height={48} sizes='100vw'/>
            <div>
              <h2>Make Payment</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. </p>
            </div>
          </li>
          <li className={styles.stepItem}>
            <Image src={ReachAirport} alt='' width={47} height={48} sizes='100vw'/>
            <div>
              <h2>Reach Airport on Selected Date</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. </p>
            </div>
          </li>
        </ul>
      </div>
      <div className={styles.stepsImg}>
        <Image src={ImgDecoration} alt='' width={485} height={459} sizes='100vw' />
      </div>
    </section>
  )
}

export default Steps