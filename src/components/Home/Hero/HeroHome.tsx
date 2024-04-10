import React from 'react'
import styles from './HeroHome.module.css'
import HeroImgHome from '@/assets/home/hero/image-hero-home.png'
import Image from 'next/image'
import { Poppins, Volkhov } from 'next/font/google'

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins'
})

const volkhov = Volkhov({
  weight: ['700'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-valkhov'
})

const HeroHome = () => {
  return (
    <section className={`${styles.heroHome} ${volkhov.variable} ${poppins.variable} container`}>
      <div className={styles.heroContent}>
        <h2 className={styles.heroSubtitle}>Best Destinations around the world</h2>
        <h1 className={styles.heroTitle}>Travel, enjoy and live a new and full life</h1>
        <p className={styles.heroDescription}>Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
        <div className={styles.heroBtns}>
          <button className={styles.findMore}>Find out more</button>
          <button className={styles.playDemo}>
            Play Demo
          </button>
        </div>
      </div>
      
    </section>
  )
}

export default HeroHome