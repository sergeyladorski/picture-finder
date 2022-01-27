import { useState, useContext } from 'react';
import { CardContext } from '../context/CardContext';
import { Input } from './Input';
import { Button } from './Button';
import { Card } from './Card';
import { Loader } from './Loader';

export const Main = ({
    onSubmit,
    isLoading,
    initialValue,
    isFirstRender
}) => {
    const [value, setValue] = useState(initialValue);
    const cards = useContext(CardContext);

    const handleInputChange = (evt) => {
        setValue(evt.target.value);
    };

    const handleFormSubmit = (evt) => {
        evt.preventDefault();
        onSubmit(value);
    };

    return (
        <div className='content'>
            <form className='search' onSubmit={handleFormSubmit}>
                <Input placeholder='Search high-resolution photos'
                    onChange={handleInputChange}
                    value={value}
                />
                <Button text='Search' value={value}/>
            </form>

            {isLoading
                ? <Loader />
                : (
                    <section className='gallery'>
                        {cards.length === 0
                            ? (!isFirstRender && <h2 className='gallery__no-results'>
                                No search results found
                            </h2>)

                            : <ul aria-label='фото-галерея' className='gallery__list'>
                                {
                                    cards.map((item) =>
                                        <Card
                                            key={item.id}
                                            {...item}
                                        />
                                    )
                                }
                            </ul>
                        }
                    </section>
                )
            }
        </div>
    );
}