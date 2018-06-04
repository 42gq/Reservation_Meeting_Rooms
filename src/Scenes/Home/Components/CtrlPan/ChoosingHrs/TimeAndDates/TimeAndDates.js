import React from 'react'
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';

function onChange(date, dateString) {
  console.log(date, dateString);
}

class TimeAndDates extends React.Component {
  render () {
    return (
      <DatePicker onChange={onChange} />
    )
  }
  }

  export default TimeAndDates;