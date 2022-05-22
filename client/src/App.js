import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './Components/Home';
import CreatePost from './Components/CreatePost';
import EditPost from './Components/EditPost';
import PostDetails from './Components/PostDetails';
import NavBar from './Components/NavBar';
import adminCard from './Components/adminCard';

class App extends Component {
  render() {
    return (
      
        <BrowserRouter>
        <div className="container">
        <NavBar/> 
        <Route path="/add" component={Home}></Route>
        <Route path="/" exact component={CreatePost}></Route>
        <Route path="/Edit/:id" component={EditPost}></Route>
        <Route path="/post/:id" component={PostDetails}></Route>
        <Route path="/adminRoute" component={adminCard}></Route>
        </div>
        </BrowserRouter>
      
    );
  }
}

export default App;