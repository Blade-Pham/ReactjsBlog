import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Banner from '../components/banner';
import '../assets/styles/mainlayout.css';
const MainLayout = ({ children }) => {
    return (
        <div>
            <div className='header-banner'>
                <Header />
                <Banner />
            </div>
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default MainLayout;


