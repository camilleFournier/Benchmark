import React from 'react';
import { Link } from 'react-router-dom';
import { Button, AppBar, Toolbar } from '@material-ui/core'; 

import './Home.css'

function Home() {
    return (
      <div className="home">
          <AppBar position="relative">
            <Toolbar>
              <h1>Benchmark App</h1>
            </Toolbar>
          </AppBar>
          <div>
            <div className="intro">
              <p>This app was developped within a Master Thesis aiming to compare the rendering performance of PWA and Android applications.
              The comparison focuses on two rendering processes: scrolling and changing the content to display (here as clicking).</p>
              <p>Which one do you want to test ?</p>
            </div>
            <div className="home-buttons">
              <Button
                className="btn btn-scrolling"
                variant="contained"
              >
                <Link to="/scrolling">Scrolling</Link>
              </Button>
              <Button
                className="btn btn-clicking"
                variant="contained"
              >
                <Link to="/clicking">Clicking</Link>
              </Button>
            </div>
          </div>
      </div>
    );
}

export default Home;