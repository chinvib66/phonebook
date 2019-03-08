import React, {Component} from 'react';
import { Button } from 'react-bootstrap'
import {deleteContact} from '../actions/contactActions'
import { connect } from 'react-redux';

class Contact extends Component{
    
    constructor(prop){
        super(prop)
		this.delete = this.delete.bind(this)
    }

    delete(e) {
        e.preventDefault();

		this.props.deleteC(this.props.id)
	}
    render() {
        return (
			<tr>
                <td>{this.props.id}</td>
                <td>{this.props.name}</td>
                <td>{this.props.number}</td>
                <td><Button onClick={(e)=>this.delete(e)} variant="danger">Delete</Button></td>
            </tr>
		)
    }
}

const mapDispatchToProps = (dispatch) => {
	return {
	// You can now say this.props.createContact
	  deleteC: (id) => dispatch(deleteContact(id))
	}
};

  // Use connect to put them together
export default connect(mapDispatchToProps)(Contact);