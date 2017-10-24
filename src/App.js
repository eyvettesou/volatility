import React, { Component } from 'react';
import './App.css';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class App extends Component {
  state = {
    current: 'mail',
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-logo">
          logo goes here
        </div>
        <Menu
           onClick={this.handleClick}
           selectedKeys={[this.state.current]}
           mode="horizontal"
           className="App-menu"
         >
           <Menu.Item key="mail" className="App-menu-items">
             HOME
           </Menu.Item>
           <Menu.Item key="mail" className="App-menu-items">
             ABOUT
           </Menu.Item>
           <Menu.Item key="mail" className="App-menu-items">
             ARTISTS
           </Menu.Item>
           <Menu.Item key="mail" className="App-menu-items">
             PHOTOS
           </Menu.Item>
           <Menu.Item key="mail" className="App-menu-items">
             VIDEOS
           </Menu.Item>
         </Menu>
        <div className="App-photostream"> goes here </div>
        <div className="App-footer">
          Contact us
        </div>
      </div>
    );
  }
}

export default App;
