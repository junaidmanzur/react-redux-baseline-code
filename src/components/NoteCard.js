import React, {Component} from "react"
import PropTypes from "prop-types"
import {
    Card,
    CardTitle,
    CardText,
    CardLink
} from "reactstrap"

class NoteCard extends Component{
    constructor(props){
        super(props)
        this.handleDelete = this.handleDelete.bind(this)
    }

    render(){
        const {id, title, body} = this.props
        return(
            <Card body>
                <CardTitle>{title}</CardTitle>
                <CardText>{body}</CardText>
                <CardLink 
                    id={id} 
                    href="#" 
                    onClick={this.handleDelete} >
                    Delete
                </CardLink>
            </Card>
        )
    }

    handleDelete(e){
        debugger
        this.props.deleteNote(e.target.id)
        e.preventDefault()
    }
}

NoteCard.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
}

export default NoteCard