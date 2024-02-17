import React from 'react';
import { Link } from 'react-router-dom';

const CategoryLinks = ({ selectCategory, toggleMyCart, selectPage }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <Link className="nav-link btn btn-primary" to="/">Home</Link>
                    ||
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <button className="nav-link btn btn-primary" onClick={() => selectCategory('Dairy')}>Dairy <i className="fa fa-shopping-basket"></i></button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link btn btn-primary" onClick={() => selectCategory('Fruits')}>Fruits <i className="fa fa-shopping-basket"></i></button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link btn btn-primary" onClick={() => selectCategory('Bakery')}>Bakery <i className="fa fa-shopping-basket"></i></button>
                        </li>
                    </ul>
                    ||
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <button className="nav-link btn btn-primary" onClick={() => selectPage('page1')}>Page 1</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link btn btn-primary" onClick={() => selectPage('page2')}>Page 2</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link btn btn-primary" onClick={() => selectPage('page3')}>Page 3</button>
                        </li>
                    </ul>
                    <button className="btn btn-primary" onClick={toggleMyCart} style={{ position: 'absolute', right: 15 }}>My Cart <i className="fa fa-shopping-cart"></i></button>

                </div>
            </div>
        </nav>
    );
};

export default CategoryLinks;
