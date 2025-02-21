import React from "react";
import {createRoot} from "react-dom/client";
import logo from "/components/logo.png";
import biryani from "/components/biryani.jpg";

/**
 * Header
 *  -Logo
 *  -Nav Item
 * Body
 *  -Search Bar
 *  -Restaurant Container
 *     -Restaurant Card
 *         -img
 *         -name of res , star rating , cuisine , delivery time
 * Footer
 *  -Social Links
 *  -Contact Us
 *  -Adress
 *  -CopyRight
 */

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={logo} alt="Logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const RestaurantCard = () => {
    return (
        <div className="res-card">
            <img className="res-logo" src={biryani} alt="Biryani" />
            <div>
                <h3>Meghana Foods</h3>
                <h4>Biryani, North Indian, Asian</h4>
                <h4>⭐ 4.4 Stars</h4>
                <h4>🚴 38 Minutes</h4>
            </div>
        </div>
    );
};


const Body = () => {
    return (
        <div className="body">
            <div className="search">
                <input type="text" placeholder="Search for restaurants or dishes..." />
            </div>
            <div className="res-container">
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
            </div>
        </div>
    );
};
const Footer = () => {
    return (
        <div className="footer">
            <p>© 2025 YourFoodApp. All Rights Reserved.</p>
            <p>
                <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
            </p>
        </div>
    );
};


const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
            <Footer />
        </div>
    );
};


const root=createRoot(document.getElementById("root"));
root.render(<AppLayout />);