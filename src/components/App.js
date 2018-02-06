import React, { Component } from 'react';
import {
  Button
} from "reactstrap"

import AppNavbar from './AppNavbar'
import NotesList from './NotesList';
import '../styles/App.css';
import NewNote from './NewNote';

class App extends Component {
  constructor(props){
    super(props)
    this.toggleNewNoteDlg = this.toggleNewNoteDlg.bind(this)
    this.state = {
      createNote: false
    }
  }

  componentDidMount(){
    this.props.actions.getNotes();
  }

  render() {
    const {notes, actions} = this.props
    return (
      <div>
        <AppNavbar />
        <main role="main" className="container mt-5">
          <Button
            outline
            color="primary"
            className="mb-2"
            onClick={this.toggleNewNoteDlg}>
            Create Note
          </Button>
          
          <NotesList
            notes={notes.collection}
            deleteNote={actions.deleteNote} />
          
          <NewNote
            isOpen={this.state.createNote}
            createNote={actions.createNote}
            onDismiss={this.toggleNewNoteDlg} />
        </main>
      </div>      
    );
  }

  toggleNewNoteDlg() {
    this.setState({
      createNote: !this.state.createNote
    })
}

}

export default App;
