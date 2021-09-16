import React from 'react';
<<<<<<< HEAD
import { Home, About, Footer,Member1, } from './components';

=======
import { Home, About, Footer } from './components';
// importing member pages below
import Member1 from './components/members/Member1';
>>>>>>> 755d69d52d157f40833a5fdd9d08357627a6831e
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

<<<<<<< HEAD
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
=======
    <div className="App" style = {{ display: 'flex', justifyContent: 'center'}}>
    <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/about/member1" component={Member1} />
      </Switch>
    </div>
    {
    //<div className="Footer" style = {{ display: 'flex', justifyContent: 'center' }}>
  }
    <div className="Footer">
        <Footer />
    </div>
    </BrowserRouter>      
  );
>>>>>>> 755d69d52d157f40833a5fdd9d08357627a6831e
}

export default App;