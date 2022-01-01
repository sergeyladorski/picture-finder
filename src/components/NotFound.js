import React from 'react';
import { Link } from 'react-router-dom';
import emptyBoxes from '../images/empty-boxes.svg'

export function NotFound() {
    return (
        <div className='notfound'>
            <img
                className='notfound__image'
                src={emptyBoxes}
                alt="Здесь должна быть картинка с пустыми коробками..."
            />
            <h1 className='notfound__title'> 404</h1>
            <p className='notfound__text'>
                Page not found. Return{' '}
                <Link className='notfound__link' to='/'>
                    home
                </Link>
            </p>
        </div>
    );
}