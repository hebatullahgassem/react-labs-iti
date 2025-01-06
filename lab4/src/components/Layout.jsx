import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { useLanguage } from '../context/LanguageContext';


const Layout = () => {
  const { direction } = useLanguage();

  return(
  <div style={{ direction }}>
    <Navbar />
    <Outlet />
  </div>
  );
};

export default Layout;
