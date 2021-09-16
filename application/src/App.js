import React from 'react';
import { Home, About, Member1, Footer } from './components';
import { Route, Link, Switch, BrowserRouter } from 'react-router-dom';
import Navigation from './components/Navigation';

function App() {
  return (
    <BrowserRouter>
{
  //trying browser router and member1 in routes
}

    <div className="App" style = {{ display: 'flex', justifyContent: 'center'}}>
    <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/about/member1" component={Member1} />
      </Switch>
    </div>
    <div className="Footer" style = {{ display: 'flex', justifyContent: 'center' }}>
        <Footer />
    </div>
    </BrowserRouter>      
  );
}

export default App;