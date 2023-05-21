import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

const Footer = () => {
  return <div>    <MDBFooter bgColor='light' className='text-center text-lg-left'>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark'>
          Foodistic - Smart Recipe Suggestion Tool
        </a>
      </div>
    </MDBFooter></div>;
};

export default Footer;
