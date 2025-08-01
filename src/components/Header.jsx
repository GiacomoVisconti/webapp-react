import { NavLink } from "react-router-dom"

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">IGdb</a>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className='nav-link' to='/'>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className='nav-link' to='/movies'>
                                Movies
                            </NavLink>

                        </li>
                        <li className="nav-item">
                            <NavLink className='nav-link' to='/'>
                                Contact Us
                            </NavLink>

                        </li>
                    </ul>
                </div>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-secondary" type="submit">Search</button>
                </form>

            </div>
        </nav>
    )
}