import React from 'react'
import { DatePicker, TimePicker } from 'antd';
import 'antd/dist/antd.css';

const format = 'HH:mm';

function onChange(date, dateString) {
  console.log(date, dateString);
}

class TimeAndDates extends React.Component {
  render () {
    return (
      <div className='TimeAndDates'>
        <TimePicker format={format} minuteStep={5}/>
        <DatePicker onChange={onChange} />
      </div>
    )
  }
  }
  
  
 
  export default TimeAndDates;