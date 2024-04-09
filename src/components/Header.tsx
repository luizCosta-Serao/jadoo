'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '../assets/logo.png'
import MenuMobile from '../assets/menu-mobile-icon.svg'
import styles from './Header.module.css'
import { usePathname } from 'next/navigation'

const Header = () => {
  const [menuActive, setMenuActive] = React.useState(false)
  const pathname = usePathname()

  function toggleMenu() {
    setMenuActive(!menuActive)
  }

  React.useEffect(() => {
    setMenuActive(false)
  }, [pathname])

  React.useEffect(() => {
    function hideMenu() {
      setMenuActive(false)
    }

    window.addEventListener('resize', hideMenu)

    return () => {
      window.removeEventListener('resize', hideMenu)
    }
  })

  return (
    <header className={`${styles.header} container`}>
      <Link className={styles.logo} href={'/'}>
        <Image
          src={Logo}
          alt='Logo'
          width={115}
          height={34}
          sizes='100vw'
          priority
        />
      </Link>
      
      <button onClick={toggleMenu} className={styles.btnMenuMobile}>
        <Image src={MenuMobile} alt='Menu' width={40} height={40} sizes='100vw'/>
      </button>

      <div className={`${styles.links} ${menuActive ? styles.menuActive : ''}`}>
        <ul className={styles.menu}>
          <li>
            <Link href={'/destinations'}>Destinations</Link>
          </li>
          <li>
            <Link href={'/hotels'}>Hotels</Link>
          </li>
          <li>
            <Link href={'/flights'}>Flights</Link>
          </li>
          <li>
            <Link href={'/bookings'}>Bookings</Link>
          </li>
        </ul>

        <Link className={styles.login} href={'/login'}>Login</Link>
        <Link className={styles.signup} href={'/signup'}>Sign up</Link>

        <select className={styles.language} name="language" id="language">
          <option value="en">EN</option>
          <option value="br">BR</option>
        </select>
      </div>
    </header>
  )
}

export default Header