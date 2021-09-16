import React from 'react';

import { Home, About, Footer } from './components';
// importing member pages below
import Member1 from './components/members/Member1';
import { Route, Link, Switch, BrowserRouter } from 'react-router-dom';
import Mynavbar from './components/Mynavbar';
import myHeader from './components/myHeader';

function App() {
    return (

        <BrowserRouter>
            {
                //trying browser router and member1 in routes
            }
            <Mynavbar />

            <div className="App" style = {{ display: 'flex', justifyContent: 'center'}}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/about/Justin-Diones" component={Member1} />
                </Switch>
            </div>
            <div className="Footer" style = {{ display: 'flex', justifyContent: 'center' }}>
                <Footer />
            </div>
        </BrowserRouter>
    );

}

export default App;