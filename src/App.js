import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import Home from './components/Home/Home';
import Usersinfo from './components/Home/Usersinfo';
import About from './components/Home/About';
import Notfound from './components/Home/Not-found';
import Userinfodetails from './components/Home/Userinfodetails';

export default function App() {
  const [user, setInfo] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => res.json())
      .then((data) => setInfo(data));
  });
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Router>
            <AppBar display='flex'>
              <div>
                <Link to='/home'>
                  <Button variant='contained' color='secondary'>
                    Home
                  </Button>
                </Link>

                <Link to='/Usersinfo'>
                  <Button variant='contained' color='secondary'>
                    Usersinfo
                  </Button>
                </Link>

                <Link to='/about'>
                  <Button variant='contained' color='secondary'>
                    About
                  </Button>
                </Link>
              </div>
            </AppBar>

            <Switch>
              <Route exact path='/'>
                {user.map((usr) => (
                  <Usersinfo usr={usr} key={usr.id} />
                ))}
              </Route>
              <Route path='/home'>
                <Home />
              </Route>
              <Route path='/usersinfo'>
                {user.map((usr) => (
                  <Usersinfo usr={usr} key={usr.id} />
                ))}
              </Route>
              <Route path='/about'>
                <About />
              </Route>
              <Route path='/:id'>
                <Userinfodetails></Userinfodetails>
              </Route>
              <Route path='*'>
                <Notfound />
              </Route>
            </Switch>
          </Router>
        </Grid>
      </Grid>
    </div>
  );
}
