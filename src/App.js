import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header, Main, Footer } from './layout';
import { Home, Stores, Menu, Order, NotFound } from './pages/';

function App() {
  return (
    <Router>
      <div className='w-screen h-screen flex flex-col'>
        <Header />
        <Main>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/stores'>
              <Stores />
            </Route>
            <Route path='/menu'>
              <Menu />
            </Route>
            <Route path='/order'>
              <Order />
            </Route>
            <Route path='/*'>
              <NotFound />
            </Route>
          </Switch>
        </Main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
