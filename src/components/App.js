import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { api } from '../utils/api.js';
import { CardContext } from '../context/CardContext';
import { useApi } from '../hooks/useApi';

import { Main } from './Main';
import { Photo } from './Photo';
import { Footer } from './Footer';
import { NotFound } from './NotFound'

function App() {

  const [searchQuery, setSearchQuery] = React.useState('Parrot');
  const [isFirstRender, setIsFirstRender] = React.useState(true);

  const handler = React.useCallback(() => {
    return api.search(searchQuery);
  }, [searchQuery]);
  const { data, loading } = useApi(handler);

  const onSubmit = (valueMain) => {
    setSearchQuery(valueMain);
    setIsFirstRender(false)
  };

  return (
    <CardContext.Provider value={data}>
      <div className='page'>
        <Switch>
          <Route exact path='/'>
            <Main
              onSubmit={onSubmit}
              initialValue={searchQuery}
              isFirstRender={isFirstRender}
              isLoading={loading}
            />
            <Footer />
          </Route>

          <Route path='/photos/:photoId'>
            <Photo />
          </Route>

          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </CardContext.Provider>
  );
}

export default App;
