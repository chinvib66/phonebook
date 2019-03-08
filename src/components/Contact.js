import React from 'react';
import { Button } from 'react-bootstrap'
import {deleteContact} from '../actions/contactActions'
import { connect } from 'react-redux';

class Contact extends React.Component{
    
    constructor(prop){
        super(prop)
		this.deleteContact = this.deleteContact.bind(this)
    }

    deleteContact(id) {
		this.props.deleteContact(id)
	}
    render() {
        return (
			<tr>
                <td>{this.props.id}</td>
                <td>{this.props.name}</td>
                <td>{this.props.number}</td>
                <td><Button onClick={this.deleteContact(this.props.id)} variant="danger">Delete</Button></td>
            </tr>
		)
    }
}

const mapDispatchToProps = (dispatch) => {
	return {
	// You can now say this.props.createContact
	  deleteContact: (id) => dispatch(deleteContact(id))
	}
};

  // Use connect to put them together
export default connect( mapDispatchToProps)(Contact);