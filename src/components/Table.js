import React, { Component } from 'react'

class Table extends Component {

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

    const TableBody = ({ characterData, removeIndex }) => {
      const rows = characterData.map((item, index) => {
        return (
          <tr key={index}>
          <td>{item.name}</td>
          <td>{item.job}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick = {() => removeIndex(index)}
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
      <TableBody characterData={this.props.characterData} removeIndex={this.props.removeIndex}/>
    </table>
    )
  }
}

export default Table
