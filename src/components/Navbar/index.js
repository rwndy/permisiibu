import Link from 'next/link'
import React from 'react'

const menu_burger = '/assets/images/burger.png'
const close_burger = '/assets/images/close.svg'
const Navbar = () => {
  const item_navbar = [
    { name: 'about', slug: '/about' },
    { name: 'portfolio', slug: '/portfolio' },
    { name: 'blog', slug: '/blog' },
    { name: 'contact', slug: '/contact' }
  ]

  const [show, setShow] = React.useState(false)
  const toggle = () => setShow(!show)

  return (
    <nav className="navigation">
      <div className="container navigation__wrapper">
        <div className="navigation__logo">
        <Link href="/">
          <a>Permisiibu</a>
        </Link>
        </div>
        <div className="navigation__wrapper--link">
          <button className={show ? "navigation__toggle active" : "navigation__toggle"} onClick={toggle}>
            <img src={show ? close_burger : menu_burger} alt="icon menu burger" />
          </button>
          <ul className={show ? "navigation__item active" : "navigation__item"}>
            {
              item_navbar.map((item, i) => (
                <li key={i} className="navigation__link">
                  <Link href={item.slug}>
                    <a>{item.name}</a>
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
