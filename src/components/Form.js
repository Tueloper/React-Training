import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addTable } from './../js/actions/index'

function mapDispatchToProps(dispatch) {
  return {
    addTable: character => dispatch(addTable(character))
  }
};

class Form extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      name: '',
      job: ''
    }
    this.state = this.initialState;

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange = e => {
    const {name, value} = e.target;
    this.setState({
      [name]: [value]
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTable(this.state);
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

const formTable = connect(
  null,
  mapDispatchToProps
)(Form);

export default formTable;
