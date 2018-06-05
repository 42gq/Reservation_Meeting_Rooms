import React from 'react';
import { Carousel } from 'antd';
import './ChooseRoom.css'

class ChooseRooms extends React.Component {
    render (){
        return (
    
    <Carousel vertical autoplay>
    <div className="t1"><h3>Description Room Type 1</h3></div>
    <div className="t2"><h3>Description Room Type 2</h3></div>
    <div className="t3"><h3>Description Room Type 3</h3></div>
    <div className="t4"><h3>Description Room Type 4</h3></div>
  </Carousel>
        );
    }
}

export default ChooseRooms