import React from 'react';
import { Lines } from 'react-preloaders';
import Order from '../DashBoard/Order/Order';
const Preloader = () => {
    return (
        <React.Fragment>
        <Order></Order>
        <Lines />
      </React.Fragment>
    );
};

export default Preloader;