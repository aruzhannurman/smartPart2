import React from 'react'
import axios from 'axios'

export const CustomDropdown = (props) => (
  <div className="form-group">
    <strong>{props.username}</strong>
    <select
      className="form-control"
      name="{props.username}"
      onChange={props.onChange}
    >
      <option defaultValue>Select {props.name}</option>
      {props.options.map((item, index) => (
        <option key={index} value={item.id}>
          {item.username}
        </option>
      ))}
    </select>
  </div>
)

export default class CustomListDropDown extends React.Component {
  constructor() {
    super()
    this.state = {
      collection: [],
      value: '',
    }
  }

  async componentDidMount() {
    const response = await axios.get('https://api.dev-smartestprep.com/api/directory/countries/?format=json&offset=100');
    this.setState({ collection: response['data']});
  }

  onChange = (event) => {
    this.setState({ value: event.target.value })
  }

  console.log()

  render() {
    return (
      <div className="container mt-4">
        <h2>React Dropdown List with Bootstrap Example</h2>

        <CustomDropdown
          name={this.state.username}
          options={this.state.collection}
          onChange={this.onChange}
        />
      </div>
    )
  }
}