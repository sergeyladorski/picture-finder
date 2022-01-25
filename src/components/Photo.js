import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import { useApi } from '../hooks/useApi';
import { api } from '../utils/api';
import { Loader } from './Loader';
import { NotFound } from './NotFound';

export function Photo() {
    const { photoId } = useParams();

    const handler = useCallback(() => {
        return api.getPhotoById(photoId)
    }, [photoId])

    const { data, loading, error } = useApi(handler);

    if (loading) {
        return <Loader />
    }
    if (error) {
        return <NotFound />
    }

    const { src, title, subtitle } = data;

    return (
        <div className='photo'>
            <Link className='photo__go-back' to='/'>
                &larr; Go back
            </Link>
            <img className='photo__image' src={src} alt={title} />
            <div className='photo__description'>
                <p className='photo__title'>{title} </p>
                <p className='photo__subtitle'>{subtitle} </p>
            </div>
        </div>
    );
}