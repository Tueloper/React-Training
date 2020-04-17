import React, { Component } from 'react'
import Table from './components/Table'
import Form from './components/Form';
import List from './components/List';
import SecondForm from './components/secondForm';

class App extends Component {
  state = {
    characters: []
  };

  render() {
    return (
      <div className="container-fluid">
        <Form/>
        <Table/>

        <div>
          <h1>Second Project</h1>
          <h2>Articles</h2>
          <List/>
          <div>
            <h2>Add a New Article</h2>
            <SecondForm/>
          </div>
        </div>
      </div>
    )
  }
}

export default App
