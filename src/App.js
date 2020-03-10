import React, { Component } from "react";
import NoteRoute from "./NoteRoute";
import FolderRoute from "./FolderRoute";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      folders: []
    };
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1>Noteful</h1>
        </header>
        <NoteRoute notes={this.props.store.notes} />
        <FolderRoute folders={this.props.store.folders} />
      </div>
    );
  }
}

export default App;
