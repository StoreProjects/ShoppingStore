import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './css/style.css';

import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';

import Home from './components/pages/home/Home';
import SignIn from './components/pages/sign-in/SignIn';
import SignUp from './components/pages/sign-up/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
