import React from 'react';
import { Home, About, Footer } from './components';
import { Route, Link, Switch } from 'react-router-dom';

function App() {
  return (
    <><div className="App" style={{ display: 'flex', justifyContent: 'center' }}>
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
    <div className="Footer" style ={{ display: 'flex', justifyContent: 'center' }}>
        <Footer />
    </div></>      
  );
}

export default App;