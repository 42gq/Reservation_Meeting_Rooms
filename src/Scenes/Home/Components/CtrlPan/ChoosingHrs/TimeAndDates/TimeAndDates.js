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
      <div>
        <TimePicker format={format} minuteStep={30}/>
        <DatePicker onChange={onChange} />
      </div>
    )
  }
  }
  
  
 
  export default TimeAndDates;