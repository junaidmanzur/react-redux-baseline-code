import React, { Component } from "react";
import { Button } from "reactstrap";

import NotesList from "./NotesList";
import NewNote from "./NewNote";

class Notes extends Component {
  constructor(props) {
    super(props);
    this.toggleNewNoteDlg = this.toggleNewNoteDlg.bind(this);
    this.state = {
      createNote: false
    };
  }

  componentDidMount() {
    this.props.actions.getNotes();
  }

  toggleNewNoteDlg() {
    this.setState({
      createNote: !this.state.createNote
    });
  }

  render() {
    const { notes, actions } = this.props;
    return (
      <main role="main" className="container">
        <Button
          outline
          color="primary"
          className="mb-2"
          onClick={this.toggleNewNoteDlg}
        >
          Create Note
        </Button>

        <NotesList notes={notes.collection} deleteNote={actions.deleteNote} />

        <NewNote
          isOpen={this.state.createNote}
          createNote={actions.createNote}
          onDismiss={this.toggleNewNoteDlg}
        />
      </main>
    );
  }
}

export default Notes;
