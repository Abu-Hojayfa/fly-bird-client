import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import Login from './Components/Login/Login';
import { createContext, useState } from 'react';
import Profile from './Components/Profile/Profile';
import Destination from './Components/Destination/Destination';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import NotFound from './Components/NotFound/NotFound';


export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    isSignIn:false,
    name: '',
    email:'',
    imgURL:''
  });

  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]} >
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          
          <Route path="/home">
            <Home />
          </Route>

          <Route path="/blog">
            <Blog />
          </Route>

          <Route path="/contacts">
            <Contact/>
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <PrivateRoute path="/profile">
            <Profile />
          </PrivateRoute>
          
          <PrivateRoute path="/destination">
            <Destination />
          </PrivateRoute>

          <Route path="*">
            <NotFound />
          </Route>

        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
