import React, { Component } from 'react';
import './Ctrl.css';
import 'antd/dist/antd.css';
import ChooseRooms from './ChoosingRooms/ChooseRoom'
import TimeAndDates from './ChoosingHrs/TimeAndDates/TimeAndDates'
import { Divider } from 'antd';
import SelectRoom from './SelectRoom/SelectRoom'
import Validation from './Validation/Validation'
class Ctrl extends Component {
    render () {
        return (
            <div className="Ctrl">
            <Divider />
                {/* <div className="verticallyCtl title"> */}
                    {/* Meeting Rooms Item: */}
                {/* </div> */}
                <div className="verticallyCtl panel">
                    <SelectRoom/>
                </div>
                <div className="verticallyCtl panel">
                    <TimeAndDates/>
                </div>
                <div className="verticallyCtl panel">
                    <Validation/>
                </div>
                <Divider />
                    <div className="verticallyCtl">                    
                <ChooseRooms className="verticallyCtrl">
                </ChooseRooms>
                </div>
            </div>
        );
    }
}

export default Ctrl