import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
export const Header = ({ cartCounter }) => {
    return (
        <div className="container-fluid">
            <nav className="navbar navbar-expand-md bg-body-tertiary sticky-top">

                <a className="navbar-brand" href="#">
                    <img src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="" />
                </a>
                <button className="navbar-toggler white-toggler-button" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                       
                     <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              Our Menu
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <a className="dropdown-item" href="#">
                                        <div className="dropdown-content">
                                            <img src="https://s7d1.scene7.com/is/image/mcdonalds/nav_mcnuggetscombo_160x160:menu-category-desktop?resmode=sharp2" alt="Item Image" className="dropdown-image" />
                                            <div className="dropdown-text">
                                                <h5>Twister</h5>
                                                <p>Tender boneless strips</p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        <div className="dropdown-content">
                                            <img src="https://s7d1.scene7.com/is/image/mcdonalds/nav_mcnuggetscombo_160x160:menu-category-desktop?resmode=sharp2" alt="Item Image" className="dropdown-image" />
                                            <div className="dropdown-text">
                                                <h5> Pcs Chicken</h5>
                                                <p>3 pieces of Hot and Crispy Fried Chicken</p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                              
                               
                            </ul>
                        </li>


                       
                        <li className="nav-item">
                            <a className="nav-link">Exclusive Deals</a>
                        </li>
                        
                        <li className="nav-item">
                            <a className="nav-link">About Our Food</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Locate</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Gift Cards</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Careers</a>
                        </li>
                    </ul>
                    <div className="search-and-icons">
                        <form className="d-flex mb-2 me-2" role="search">
                            <input className="form-control me-2" type="search" aria-label="Search" />
                        </form>
                        <div className="user-icons d-flex mb-2">
                            <div className="profile"><i className="bi bi-person heart-icon"></i></div>
                            <div className="wishlist"><i className="bi bi-heart heart-icon"></i></div>
                            <div className="cart">
                                <button class="btn btn-primary cartview-class" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
                                    <i className="bi bi-cart3"> <sup>{cartCounter}</sup></i></button></div>
                        </div>
                    </div>
                    <div className="contact-info d-md-flex">
                        <p>+923319888298 | +923469888297 </p>
                        <p><a href="mailto:">shaukat.jassme786@gmail.com</a></p>
                    </div>
                </div>

            </nav>
        </div>
    )
}
