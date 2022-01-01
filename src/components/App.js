import React from 'react';
import Input from './Input';
import Button from './Button';
import Card from './Card';
import Loader from './Loader';
import Footer from './Footer';
import api from '../utils/api.js';

function App() {

  const [searchQuery, setSearchQuery] = React.useState('random');
  const [cards, setCards] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    handleRequest()
  }, [])


  const handleRequest = () => {
    if (searchQuery !== '') {
      setIsLoading(true);

      api.search(searchQuery)
        .then(data => {
          const cards = data.results.map(item => {
            return {
              id: item.id,
              src: item.urls.regular,
              alt: item.alt_description,
              title: item.user.name,
              subtitle: item.description,
            }
          })
          setCards(cards)
        })
        .catch(err => console.error(err))
        .finally(() => setIsLoading(false))
    }
  }
  const handleInputChange = (evt) => {
    setSearchQuery(evt.target.value)
  }
  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    handleRequest();
  }
  //display results if ms-delay
  // const debounce = (fn, ms) => {
  //   let timeout;

  //   return function () {
  //     const fnCall = () => {
  //       fn.apply(this, arguments)
  //     }
  //     clearTimeout(timeout);
  //     timeout = setTimeout(fnCall, ms)
  //   }
  // }

  return (
    <div className='page'>
      <div className='content'>
        <form className='Search' onSubmit={handleFormSubmit}>
          <Input placeholder='Search high-resolution photos for free'
            handleChange={handleInputChange} 
            // handleChange={debounce(handleInputChange, 400)} 
            />
          <Button text='Search' />
        </form>

        {isLoading
          ? <Loader />
          : (
            <section className='gallery'>
              <ul aria-label='фото-галерея' className='gallery__list'>
                {
                  cards.map(item =>
                    <Card
                      key={item.id}
                      src={item.src}
                      title={item.title}
                      subtitle={item.subtitle}
                      alt={item.alt}
                    />
                  )
                }
              </ul>
            </section>
          )
        }
      </div>
      <Footer/>
    </div>
  );
}

export default App;
