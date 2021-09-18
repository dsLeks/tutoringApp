import React from 'react';

import { Home, About, Footer } from './components';
// importing member pages below
import Member1 from './components/members/Member1';
import Member2 from './components/members/Member2';
import Member3 from './components/members/Member3';
import Member4 from './components/members/Member4';
<<<<<<< HEAD
import Member5 from './components/members/Member5';
=======
import Member6 from './components/members/Member6';
>>>>>>> refs/remotes/origin/develop
import { Route, Link, Switch, BrowserRouter } from 'react-router-dom';
import Mynavbar from './components/Mynavbar';
import MyHeader from './components/MyHeader';

function App() {
    return (

        <BrowserRouter>
            {
                //trying browser router and member1 in routes
            }
            <MyHeader />
            <Mynavbar/>


            <div className="App" style = {{ display: 'flex', justifyContent: 'center'}}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/about/Justin-Diones" component={Member1} />
                    <Route exact path="/about/RuiQi-Huang" component={Member2} />
                    <Route exact path="/about/Rupak-Khatri" component={Member3} />
                    <Route exact path="/about/William-Lushbough" component={Member4} />
<<<<<<< HEAD
                    <Route exact path="/about/Alekhya-Gandu" component={Member5} />

=======
                    <Route exact path="/about/Mai-Ra" component={Member6} />
>>>>>>> refs/remotes/origin/develop
                </Switch>
            </div>
            <div className="Footer" style = {{ display: 'flex', justifyContent: 'center' }}>
                <Footer />
            </div>
        </BrowserRouter>
    );

}

export default App;