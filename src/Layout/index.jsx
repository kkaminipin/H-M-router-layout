// import React from 'react';
import PropTypes from 'prop-types';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

const Layout = ({ children }) => {
  // console.log(children);
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.array.isRequired,
};
export default Layout;
