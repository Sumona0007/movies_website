import React, { Component } from 'react';
import Movies from './movies.components';
import Navigation from './Navigation.components';
import { Route ,Switch} from 'react-router-dom';
import Home from './Home.components';
import Sign_Up from './Sign_up.components';
import Sign_in from './Sign_in.components';
import MovieForm from './movies-form.components';


class App extends Component {
    state = {  } 
    render() { 
        return (
            <>
              <Navigation />
              <Switch>
                <Route path='/home' component={Home}/>
                <Route path='/sign_up' component={Sign_Up}/>
                <Route path='/movies'  component={Movies}/>
                <Route path='/sign_in' component={Sign_in}/>
                <Route path='/add-movies' component={MovieForm}/>
              </Switch>
              
              
              {/* <Movies /> */}
            
            </>
        );
    }
}
 
export default App;