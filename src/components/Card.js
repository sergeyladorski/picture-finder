import { Link } from 'react-router-dom'

export const Card = (props) => {
    return (
        <Link className='card' to={`/photos/${props.id}`}>
            <img className='card__image' src={props.src} alt={props.alt} />
            <div className='card__description'>
                <p className='card__title'>{props.title}</p>
                <p className='card__subtitle'>{props.subtitle}</p>
            </div>
        </Link>
    )
}