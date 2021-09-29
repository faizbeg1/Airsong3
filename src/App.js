import React from 'react';
import LogInPage from "./component/login/loginpage/login-page"
import FirstPage from './component/login/FirstPage';
import SPOTIFY from './component/spotify/spotify';
import {Route,Switch} from 'react-router-dom'
function App(){
    return (
        <Switch>

            <Route exact path="/" component={SPOTIFY}/>
            <Route  path="/Login" component={LogInPage} />
            <Route  path="/home" component={FirstPage}/>

        </Switch>
        /* <SPOTIFY /> */
        
        );
 };
 
 
 
 export default App;