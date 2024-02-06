import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-black ">
                    <div className="container-fluid">
                        <Link className="navbar-brand text-light" to="/">NewsWalla</Link>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item"> <Link className="nav-link active text-light" to="/business">Business</Link></li>
                                <li className="nav-item"> <Link className="nav-link active text-light" to="/entertainment">Entertainment</Link></li>
                                <li className="nav-item"> <Link className="nav-link active text-light" to="/health">Health</Link></li>
                                <li className="nav-item"> <Link className="nav-link active text-light" to="/science">Science</Link></li>
                                <li className="nav-item"> <Link className="nav-link active text-light" to="/sports">Sports</Link></li>
                                <li className="nav-item"> <Link className="nav-link active text-light" to="/technology">Technology</Link></li>

                            </ul>
                            {/* <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form> */}
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}