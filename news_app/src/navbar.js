import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm bg-light">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="/news1">news 1</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="news2">news 2</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="news3">news 3</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar