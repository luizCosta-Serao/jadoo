import React from 'react'
import styles from './ItemBestService.module.css'
import Image, { StaticImageData } from 'next/image';

type ItemBestServiceProps = {
  img: StaticImageData  ;
  title: string;
  description: string;
}

const ItemBestService = ({
  img,
  title,
  description
}: ItemBestServiceProps ) => {
  return (
    <li className={styles.itemBestService}>
      <Image src={img} alt='' width={166} height={153} sizes='100vw' />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}

export default ItemBestService