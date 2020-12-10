import React from 'react'
import Footer from './Footer'
import Header from './Header'
import '../assets/styles/App.scss';

const Layout = ({ children }) => (
    <div className="App">
        <Header />
        {children}
        <Footer />
    </div>
);

export default Layout;