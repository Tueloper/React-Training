import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addArticle } from './../js/actions/index';

function mapDispatchToProps(dispatch) {
  return {
    addArticle: article => dispatch(addArticle(article))
  }
};

class secondForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const {id, value} = event.target;
    this.setState({ [id]: [value]})
  };

  handleSubmit(e) {
    e.preventDefault();
    const { title } =this.state;
    this.props.addArticle({ title });
    this.setState({ title: '' })
  };

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            className="form-control"
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-block btn-primary">SAVE</button>
      </form>
    )
  }
}

const Form = connect(
  null,
  mapDispatchToProps
)(secondForm);

export default Form;
