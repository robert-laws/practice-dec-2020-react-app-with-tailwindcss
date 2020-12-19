import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header, Main, Footer } from './layout';
import { Home, Stores, Menu, Order } from './pages/';

function App() {
  return (
    <Router>
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
        </Switch>
      </Main>
      <Footer />
    </Router>
  );
}

export default App;
