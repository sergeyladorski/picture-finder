import React from 'react';
import { Link } from 'react-router-dom';
import emptyBoxes from '../images/empty-boxes.svg'

export function NotFound() {
    return (
        <div className='not-found'>
            <img
                className='not-found__image'
                src={emptyBoxes}
                alt="Здесь должна быть картинка с пустыми коробками..."
            />
            <h1 className='not-found__title'>404</h1>
            <p className='not-found__text'>
                Page not found. Return {' '}
                <Link className='not-found__link' to='/'>
                    home
                </Link>
            </p>
        </div>
    );
}