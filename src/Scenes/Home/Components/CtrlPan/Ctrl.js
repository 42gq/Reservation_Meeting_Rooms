import React, { Component } from 'react';
import './Ctrl.css';
import Rooms from './ChoosingRooms/ChooseRoom'
// import './ChooseRoom.css'

class Ctrl extends Component {
    render () {
        return (
            <div>
                <div className="Ctrl">
            MEETING ROOMS SERVICE
            <div className="Empty">
                </div>
            </div>
            <Rooms className="ant-carousel">
            </Rooms>
            </div>
        );
    }
}

export default Ctrl