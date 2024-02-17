import React from 'react';
import { Link } from 'react-router-dom';

const CategoryLinks = ({ selectCategory }) => {
    return (
        <div style={{
            position: 'absolute', top: 25, left: 25, width: 325, backgroundColor: "#38cd8c",
            padding: '5px 20px 5px 20px',
            border: '1px solid black',
            borderRadius: '3px',
        }}>
            <h2>Pages</h2>
            <ul>
                <li style={{ margin: '5px' }}>
                    <button className="btn btn-primary btn-sm" onClick={() => selectCategory('page1')}>Page 1</button>
                </li>
                <li style={{ margin: '5px' }}>
                    <button className="btn btn-primary btn-sm" onClick={() => selectCategory('page2')}>Page 2</button>
                </li>
                <li style={{ margin: '5px' }}>
                    <button className="btn btn-primary btn-sm" onClick={() => selectCategory('page3')}>Page 3</button>
                </li>
            </ul>
            <hr></hr>
            <h2 style={{ textAlign: 'center' }}>Market Categories</h2>
            <ul>
                <li style={{ margin: '5px' }}>
                <button className="btn btn-primary btn-sm" onClick={() => selectCategory('Dairy')}>Dairy</button> <i className="fa fa-shopping-basket"></i> 
                </li>
                <li style={{ margin: '5px' }}>
                    <button className="btn btn-primary btn-sm" onClick={() => selectCategory('Fruits')}>Fruits</button> <i className="fa fa-shopping-basket"></i> 
                </li>
                <li style={{ margin: '5px' }}>
                    <button className="btn btn-primary btn-sm" onClick={() => selectCategory('Bakery')}>Bakery</button> <i className="fa fa-shopping-basket"></i> 
                </li>
            </ul>
            <hr></hr>
            <h2 style={{ textAlign: 'center' }}>Links</h2>
            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
                <div style={{ marginBottom: "10px" }}>
                    <Link className="btn btn-primary" to="/sample1">Link to Sample Page 1</Link>
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <Link className="btn btn-primary" to="/sample2">Link to Sample Page 2</Link>
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <Link className="btn btn-primary" to="/">Home</Link>
                </div></div>
        </div>
    );
};

export default CategoryLinks;
