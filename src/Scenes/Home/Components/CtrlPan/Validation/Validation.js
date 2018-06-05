import React from 'react'
import 'antd/dist/antd.css';
import { Button } from 'antd';
import './Validation.css';

class Validation extends React.Component {
    render() {
        return (
    <div>
        <Button className='round' type="primary" icon="right-circle-o">Reserve !</Button>
    </div>
    );
    }
}

export default Validation