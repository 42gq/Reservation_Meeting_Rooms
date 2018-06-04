import React from 'react';
import { Menu, Icon} from 'antd';
import 'antd/dist/antd.css';
import './Present.css'
import logo from './logStationF.svg';

const SubMenu = Menu.SubMenu;

class Present extends React.Component {

    state = {
        current: '',
      }
      handleClick = (e) => {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
      }
      render() {
        return (
          <div className='MenuPres'>
            <div className='MenuPres'>
            <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div className='MenuPres'>
          <Menu
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal"
          >
            <Menu.Item key="home">
              <Icon type="" />StationF
            </Menu.Item>
            <Menu.Item key="app" disabled>
              <Icon type="appstore" /> Reservations
            </Menu.Item>
            <SubMenu title={<span><Icon type="user" />My Profile</span>}>
              <Menu.Item title="myreservations"> My Reservations </Menu.Item>
            </SubMenu>
            <Menu.Item key="alipay">
              <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
            </Menu.Item>
          </Menu>
          </div>
          </div>
        );
      }
    }
    
   export default Present