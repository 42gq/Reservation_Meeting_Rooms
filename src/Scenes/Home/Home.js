import React, { Component } from 'react';
import { Divider } from 'antd';
import Header from './Components/Header/Header'
// import './Components/Header/HeaderStyle.css'
import './HomeStyle.css'
import Present from './Components/Present/Present'
import Ctrl from './Components/CtrlPan/Ctrl'
import Footer from './Components/Footer/Footer'

class Home extends Component {
    render() {
      return (
        <div className="Home">
            <div className="Elem">
            <Present/>
            </div>
            <div className="Elem">
            <Header/>
            </div>
            <Divider />
            <div className="Elem">
            <Ctrl/>
            </div>
            <Divider />
            <div className="Elem">
            <Footer/>
            </div>
            <Divider />
        </div>
      );
    }
  }
  
  export default Home;
  