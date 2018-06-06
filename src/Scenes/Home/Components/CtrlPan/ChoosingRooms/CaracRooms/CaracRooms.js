import React, { Component } from 'react'
import { Card } from 'antd';
import 'antd/dist/antd.css';
import './CaracRooms.css';

class CaracRooms extends Component {
    render () {
        return (
            <div className= "carac">
            <Card className="card" title="TypeofRoom get from DB" extra={<a href="http://localhost:3000/">Disponibilities</a>} style={{ width: 500 }}>
                <p>Elem : Capacity get from DB</p>
                <p>Elem : List of Equipments
                    get from DB
                </p>
            </Card>
            </div>
        );
    }
}

export default CaracRooms;