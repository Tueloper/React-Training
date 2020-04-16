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


            <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            value={name}
            onChange={this.handleChange}
          />

            <input
            type="text"
            className="form-control"
            name="job"
            id="name"
            value={job}
            onChange={this.handleChange}
          />

          <button className="btn btn-success btn-block">Submit</button>


        </form>
        </div>
      </div>
    )
  }
}

export default Form
