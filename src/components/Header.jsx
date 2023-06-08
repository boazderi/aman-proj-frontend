import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    const [menuOpen, setCurrMenuOpen] = useState(false)

    const openMenu = () => {
        setCurrMenuOpen(!menuOpen)
    }

    const navItems = [<NavLink key={'ContactList'} to='/contacts'>Contact List</NavLink>,
    <NavLink key={'CallHistory'} to='/history'>Call History</NavLink>]

    return (
        <div className='app-header'>
            <NavLink to='/'>
                <h1>AMAN-TWILIO-PROJ</h1>
            </NavLink>
            <nav className='nav-bar flex'>
                {navItems.map(navItem => navItem)}
            </nav>
            <section className={`menu-modal ${!menuOpen ? 'open' : ''}`}>
                <article className='sidebar-btn new-case-btn flex  align-center'>
                    {navItems.map(navItem => navItem)}
                </article>
            </section>
            <div
                className={`menu-icon ${menuOpen ? 'open' : ''}`}
                onClick={openMenu}
            > {['1', '2', '3'].map(num =>
                (<div key={num} className={`bar${num}`}></div>))
                }
            </div>
        </div>
    )
}

export default Header
