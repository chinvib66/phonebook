import React, { Component } from 'react';
import { Container, Table, Button } from 'react-bootstrap'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import Contact from './Contact'
import {deleteContact} from '../actions/contactActions'

class Book extends Component{

    constructor(props){
        super(props)
    this.eachContact = this.eachContact.bind(this)
    this.delete = this.delete.bind(this)
    }

    delete = (id)=> {
      this.props.deleteContact(id)
    }  

    eachContact(contact, i) {
		return (
			<Contact key={contact.id}
				  id={contact.id}
				  name={contact.name}
				  number={contact.number}
          onDel={()=>this.delete(contact.id)}>
		    </Contact>
		)
	}

    render(){
        return(
        <Container>
            <Link to='/add'><Button variant='success'>Add</Button></Link>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Number</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                  {this.props.contacts.map(this.eachContact)}
                </tbody>
            </Table>
        </Container>
        )

    }   

}
//                {this.props.contacts.map(this.eachContact)}

const mapStateToProps = (state, ownProps) => {
	return {
	  // You can now say this.props.contacts
	  contacts: state.contacts
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
	// You can now say this.props.createContact
	  deleteContact: (id) => dispatch(deleteContact(id))
	}
};

  // Use connect to put them together
  // Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(Book);