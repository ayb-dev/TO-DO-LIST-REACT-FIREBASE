import React, { Component } from 'react'
import './Note.css';
import PropTyps from 'prop-types';

export default class Note extends Component {

    constructor(props){
        super(props);
        this.noteContent = props.noteContent;
        this.noteId = props.noteId;
        this.handleRemoveNote = this.handleRemoveNote.bind(this);
    }

    handleRemoveNote(id){
        this.props.removeNote(id);
    }

    render() {
        return (
        <div className="note fade-in">
        <span className="closebtn" onClick={() => this.handleRemoveNote(this.noteId)}>&times;</span>
            <p className="noteContent">{this.noteContent}</p>
        </div>
        )
    }
}

Note.PropTyps = {
    noteContent: PropTyps.string
}
