import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import Welcome from './components/welcome';
import NavBar from './components/navbar';
import About from './components/about';
import Products from './components/products';
import Dashboard from './components/dashboard';
import HowItWorks from './components/how-it-works';
import Footer from './components/footer';
import ScrollIntoView from './components/scroll-into-view';
import Login from './components/login';
import SignUp from './components/signup';

const NavRoute = ({ exact, path, component: Component }) => (
  <Route
    exact={exact}
    path={path}
    render={(props) => (
      <div>
        <NavBar />
        <Component {...props} />
      </div>
    )}
  />
);

class App extends Component {
  render() {
    return (
      <Fragment>
        <ScrollIntoView>
          <Switch>
            <NavRoute exact path="/" component={Welcome} />
            <NavRoute exact path="/about" component={About} />
            <NavRoute exact path="/how-it-works" component={HowItWorks} />
            <NavRoute exact path="/products" component={Products} />
            <Route path="/dashboard" component={Dashboard} />
            <NavRoute exact path="/login" component={Login} />
            <NavRoute exact path="/signup" component={SignUp} />
          </Switch>
        </ScrollIntoView>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
