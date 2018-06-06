import React from 'react';
import { Carousel } from 'antd';
import './ChooseRoom.css'
import CaracRooms from "./CaracRooms/CaracRooms";

class ChooseRooms extends React.Component {
    render (){
        return (
    
    <Carousel autoplay>
    <div>
        <h3>
            <div className="t1">
            <CaracRooms/>
        </div>
        </h3>
    </div>
    <div>
        <h3>
            <div className="t2">
            <CaracRooms/>
        </div>
        </h3>
    </div>
    <div>
        <h3>
            <div className="t3">
            <CaracRooms/>
        </div>
        </h3>
    </div>
    <div>
        <h3>
            <div className="t4">
            <CaracRooms/>
        </div>
        </h3>
    </div>
    </Carousel>
        );
    }
}

export default ChooseRooms