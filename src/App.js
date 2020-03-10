import React, { Component } from "react";
import { Route } from 'react-router-dom';
import Main from './Main';
import NoteRoute from "./NoteRoute";
import FolderRoute from "./FolderRoute";
import "./App.css";

class App extends Component {
    state = {
      notes: [],
      folders: []
    };
  

  render() {
    return (
      <div className='App'>
        <Route exact path ='/' component= {NoteRoute} />
        <header className='App-header'>
          <h1>Noteful</h1>
        </header>
        {/* <Route path='/NoteRoute' componen */}
        {/* <NoteRoute notes={this.props.store.notes} />
        <FolderRoute folders={this.props.store.folders} /> */}
      </div>
    );
  }
}

export default App;
