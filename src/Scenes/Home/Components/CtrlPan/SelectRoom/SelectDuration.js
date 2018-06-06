import React from 'react'
import 'antd/dist/antd.css';
import { Select } from 'antd';

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
class IntegerStep extends React.Component {
    state = {
        // placeholder="How many times ?"
    inputValue: 0
    }
    onChange = (value) => {
      this.setState({
        inputValue: value,
      });
    }
    render() {
      return (
        <Select
        showSearch
        style={{ width: 160 }}
        placeholder="How many Time ?"
        optionFilterProp="children"
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
      >
        <Option value="1/4">1/4 hrs</Option>
        <Option value="1/2">1/2 hrs</Option>
        <Option value="3/4">3/4 hrs</Option>
        <Option value="1">1 hrs</Option>
        <Option value="5/4">1 hrs 1/4</Option>
        <Option value="3/2">1 hrs 1/2</Option>
        <Option value="7/4">1 hrs 3/4</Option>
        <Option value="2">2 hrs</Option>
            </Select>
      );
    }
  }

  export default IntegerStep