import React from 'react'
import { Link } from 'gatsby'
import './style.scss'

class Menu extends React.Component {
  render() {
    const menu = this.props.data

    const menuBlock = (
      <ul className="menu__list">
        {menu.map(item => {
          if (item.path.indexOf('http') == -1) {
            return <li className="menu__list-item" key={item.path}>
              <Link
                to={item.path}
                className="menu__list-item-link"
                activeClassName="menu__list-item-link menu__list-item-link--active"
              >
                {item.label}
              </Link>
            </li>
          } else {
            return <li className="menu__list-item" key={item.path}>
            <a
              href={item.path}
              target="_blank"
              rel="noopener noreferrer"
              className="menu__list-item-link"
              // activeClassName="menu__list-item-link menu__list-item-link--active"
            >{item.label}
            </a>
          </li>
          }
        })}
      </ul>
    )

    return <nav className="menu">{menuBlock}</nav>
  }
}

export default Menu
