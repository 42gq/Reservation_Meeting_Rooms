import React from 'react'
import 'antd/dist/antd.css';
import { Select } from 'antd';
import Duration from "./SelectDuration";

const Option = Select.Option;

function handleChange(value) {
  console.log(`selected ${value}`);
}

function handleBlur() {
  console.log('blur');
}

function handleFocus() {
  console.log('focus');
}

class SelectRoom extends React.Component {
render() {
    return (
  <div>
    <Select
    showSearch
    style={{ width: 200 }}
    placeholder="Select your room"
    optionFilterProp="children"
    onChange={handleChange}
    onFocus={handleFocus}
    onBlur={handleBlur}
    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
  >
    <Option value="Type Room 1">Type Room 1</Option>
    <Option value="Type Room 2">Type Room 2</Option>
    <Option value="Type Room 3">Type Room 3 </Option>
  </Select>
  <Duration>
    </Duration>
  </div>
    );
}
}

export default SelectRoom