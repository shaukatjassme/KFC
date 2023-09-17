import React from 'react';
import {Header} from '../pages/Header'; // Adjust the import path based on your project's directory structure

const Layout = ({ children,cartCount,increment }) => {
  return (
    <>
      <Header cartCount={cartCount} increment={increment}  />
      {children}
    </>
  );
};

export default Layout;
