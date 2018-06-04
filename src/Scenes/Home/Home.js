import React, { Component } from 'react';
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
            <Present/>
            <Header />
            <Ctrl/>
            <Footer/>
        </div>
      );
    }
  }
  
  export default Home;
  