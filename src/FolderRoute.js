import React, { Component } from "react";

class FolderRoute extends Component {
  render() {
    return (
      <ul>
        {this.props.folders.map(folder => {
          return (
            <div>
              <li>{folder.name}</li>
            </div>
          );
        })}
        <button type='button'>Add Folder</button>
      </ul>
    );
  }
}

export default FolderRoute;
