import React, { Component } from "react"
import PropTypes from "prop-types"
import {
    Col,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from "reactstrap"

class NewNote extends Component {
    constructor(props) {
        super(props)
        this.toggleDlg = this.toggleDlg.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleCreate = this.handleCreate.bind(this)

        this.state = {
            modal: false,
            note:{
                title:"",
                body:""
            }
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.isOpen) {
            this.toggleDlg()
        }
    }

    render() {
        return (
            <Modal isOpen={this.state.modal} toggle={this.toggleDlg}>
                <ModalHeader toggle={this.toggleDlg}>Create Note</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup row>
                            <Label for="title" sm={2}>Title</Label>
                            <Col sm={10}>
                                <Input 
                                    type="text" 
                                    name="title" 
                                    placeholder="enter note tile"
                                    onChange={this.handleInputChange} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="body" sm={2}>Body</Label>
                            <Col sm={10}>
                                <Input 
                                    type="textarea" 
                                    name="body" 
                                    placeholder="enter body text"
                                    onChange={this.handleInputChange} />
                            </Col>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.handleCreate}>Create</Button>
                    <Button color="secondary" onClick={this.toggleDlg}>Cancel</Button>
                </ModalFooter>
            </Modal>
        )
    }

    toggleDlg() {
        this.setState({
            modal: !this.state.modal
        })

        this.props.onDismiss();
    }

    handleInputChange(e){
        let name = e.target.name
        let value = e.target.value
    
        this.setState(prevState => ({
            note: {
                ...prevState.note,
                [name]: value
            }
        }))

        e.preventDefault()
    }

    handleCreate(e){
        this.props.createNote(this.state.note)
        this.toggleDlg()
        e.preventDefault()
    }
}

NewNote.propTypes = {
    isOpen: PropTypes.bool.isRequired
}

export default NewNote