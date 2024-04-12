import Image, { StaticImageData } from 'next/image';
import React from 'react'
import Navigation from '@/assets/home/top-destinations/navigation.png'
import styles from './ItemDestination.module.css'

type ItemDestinationProps = {
  img: StaticImageData;
  title: string;
  price: string;
  days: string;
}

const ItemDestination = ({
  img,
  title,
  price,
  days
}: ItemDestinationProps ) => {
  return (
    <li className={styles.itemDestination}>
      <Image className={styles.imgDestination} src={img} alt='' width={315} height={327} sizes='100vw' />
      <div className={styles.titlePrice}>
        <h3>{title}</h3>
        <span>{price}</span>
      </div>
      <p className={styles.days}>
        <Image src={Navigation} alt='' width={20} height={20} sizes='100vw'  />
        {days}
      </p>
    </li>
  )
}

export default ItemDestination