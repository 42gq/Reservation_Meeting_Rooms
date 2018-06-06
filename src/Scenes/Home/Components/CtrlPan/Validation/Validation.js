import React from 'react'
import 'antd/dist/antd.css';
import { message, Button } from 'antd';
import './Validation.css';

const warning = () => {
    message.warning('Select what you need!');
  };

class Validation extends React.Component {
    render() {
        return (
    <div>
        <Button className='round' type="primary" icon="down-circle-o" onClick={warning}><br/>Reserve !</Button>
    </div>
    );
    }
}

export default Validation