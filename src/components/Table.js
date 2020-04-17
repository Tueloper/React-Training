import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeTableIndex } from './../js/actions/index'

const mapStateToProps = state => {
  return { characters: state.characters }
}

function mapDispatchToProps(dispatch) {
  return {
    removeTableIndex: index => dispatch(removeTableIndex(index))
  }
};

class Table extends Component {
  constructor(props) {
    super(props);
    this.removeIndex = this.removeIndex.bind(this);
  }

  removeIndex = (index) => {
    this.props.removeTableIndex(index)
  };

  render() {
    const TableHeader = () => {
      return (
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Job</th>
            <th>Actions</th>
          </tr>
        </thead>
      )
    };

    const TableBody = () => {
      const rows = this.props.characters.map((item, index) => {
        return (
          <tr key={index}>
          <td>{item.name}</td>
          <td>{item.job}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick = {() => this.removeIndex(index)}
            >
              Delete
            </button>
          </td>
        </tr>
        )
      } )
      return (
      <tbody>{ rows }</tbody>
      )
    }

    return (
      <table className="table">
      <TableHeader />
      <TableBody/>
    </table>
    )
  }
}
const connection = connect(mapStateToProps, mapDispatchToProps)(Table);

export default connection;
