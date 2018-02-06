import React, {Component} from "react"
import PropTypes from "prop-types"
import {
    CardColumns
} from 'reactstrap'

import NoteCard from "./NoteCard"

class NotesList extends Component {
    render(){
        let {notes, deleteNote} = this.props
        let notesList = []
        notes && notes.forEach((note, index) => {
            notesList.push(
                <NoteCard
                    key={index}
                    id={note.id}
                    title={note.title}
                    body={note.body}
                    deleteNote={deleteNote} />
            )
        })
        return (
            <CardColumns>
                {notesList}
            </CardColumns>
        )
    }
}

NotesList.propTypes = {
    notes: PropTypes.array.isRequired,
    deleteNote: PropTypes.func.isRequired
}

export default NotesList