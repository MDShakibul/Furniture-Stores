import React from 'react';
import './NotFoundPage.css'
import PageNotFound from '../../images/404-error-and-page-not-found.jpg'

const NotFoundPage = () => {
    return (
        <div className='d-flex justify-content-center page-not-found'>
           <img src={PageNotFound} alt="" className='Img-fluid'/>
        </div>
    );
};

export default NotFoundPage;