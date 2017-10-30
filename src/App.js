import React, { Component } from 'react';
import './App.css';
import { Menu } from 'antd';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
  state = {
    current: 'home',
  }

  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  }

  home = () => {
    return(
      <div>
        <h2>Hello</h2>
      </div>
    )
  }

  about = () => {
    return(
      <div>
        <h2>ABOUT</h2>
      </div>
    )
  }

  artists = () => {
    return(
      <div>
        <h2>ARTISTS</h2>
      </div>
    )
  }

  photos = () => {
    return(
      <div>
        <h2>Photos</h2>
      </div>
    )
  }

  videos = () => {
    return(
      <div>
        <h2>Video</h2>
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        <div className="App-logo">
          logo goes here
        </div>
        <Router>
          <div>
            <Menu
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode="horizontal"
              className="App-menu"
            >
              <Menu.Item key="home" className="App-menu-items">
                <Link to="/">HOME</Link>
              </Menu.Item>
              <Menu.Item key="about" className="App-menu-items">
                <Link to="/about">ABOUT</Link>
              </Menu.Item>
              <Menu.Item key="artists" className="App-menu-items">
                <Link to="/artists">ARTISTS</Link>
              </Menu.Item>
              <Menu.Item key="photos" className="App-menu-items">
                <Link to="/photos">PHOTOS</Link>
              </Menu.Item>
              <Menu.Item key="videos" className="App-menu-items">
                <Link to="/videos">VIDEOS</Link>
              </Menu.Item>
            </Menu>
            <div className="App-photostream">
              <Route exact path="/" component={this.home}/>
              <Route path="/about" component={this.about}/>
              <Route path="/artists" component={this.artists}/>
              <Route path="/photos" component={this.photos}/>
              <Route path="/videos" component={this.videos}/>

            </div>
          </div>
        </Router>
        <div className="App-footer">
          Contact us
        </div>
      </div>
    );
  }
}

export default App;
