import React, { Component } from 'react'

class Form extends Component {
  initialState = {
    name: '',
    job: ''
  }

  state = this.initialState;

  handleChange = e => {
    const {name, value} = e.target;
    this.setState({
      [name]: [value]
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.handlesubmit(this.state);
    this.setState(this.initialState)
  }

  render() {
    const { name, job } = this.state;
      return (
      <div>
          <div className="row">
        <form onSubmit={this.onSubmit}>

            <div className="col-md-5">
            <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={this.handleChange}
          />
            </div>
            <div className="col-md-5">
            <input
            type="text"
            name="job"
            id="name"
            value={job}
            onChange={this.handleChange}
          />
            </div>
          <div className="col-md-2">
          <button className="btn btn-success btn-block">Submit</button>
          </div>

        </form>
        </div>
      </div>
    )
  }
}

export default Form
