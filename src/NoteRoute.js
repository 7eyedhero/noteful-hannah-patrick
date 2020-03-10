import React, { Component } from "react";

class NoteRoute extends Component {
  render() {
    console.log(this.props.notes);
    return (
      <ul>
        {this.props.notes.map(note => {
          return (
            <div>
              <li>
                <h1>{note.name}</h1>
              </li>
              <li>{note.modified}</li>
              <button type='button'>Delete Note</button>
            </div>
          );
        })}
        <button type='button'>Add Note</button>
      </ul>
    );
  }
}

export default NoteRoute;
