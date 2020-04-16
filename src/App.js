import React, { Component } from 'react'
import Table from './components/Table'
import Form from './components/Form';
import List from './components/List';
import SecondForm from './components/secondForm';

class App extends Component {
  state = {
    characters: []
  };

  removeIndex = (index) => {
    const { characters } = this.state;
    this.setState({
      characters: characters.filter((item, i) => i !== index )
    })
  };

  handlesubmit = character => {
    this.setState({ characters: [...this.state.characters, character]})
  }

  render() {
    return (
      <div className="container-fluid">
        <Form handlesubmit={this.handlesubmit}/>
        <Table characterData={this.state.characters} removeIndex={this.removeIndex}/>

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
