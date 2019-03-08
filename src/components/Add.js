import React , { Component }from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import {createContact} from '../actions/contactActions'
import { nextId } from '../actions/idActions'
import {Container , Form, Button, Alert} from 'react-bootstrap'
class Add extends Component {
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            variant: '',
            alertClass:''
        }
        this._newText = ''
        this._newNumber = ''
    }
    
    handleSubmit(e){
        e.preventDefault();
        this.props.createContact(this._newText.value, this._newNumber.value,this.props.nextid)
        this.props.nextId()
        this.setState({variant : this.state.variant + 'success'});
        this.setState({ alertClass: this.state.alertClass+ 'show'})
        }


    render(){
        let msg = ''
        if (this.state.variant === 'success'){
            msg = 'Added Successfully'
        }
        return(
            <Container>
                <Link to='/'><Button variant='light'>Back</Button></Link>
                <Alert variant={this.state.variant} className={this.state.alertClass}>
                    {msg}
                </Alert>
                <div className='form-div'>
                    <Form
                    onSubmit={e => this.handleSubmit(e)}>
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control ref={input => this._newText = input} type="text" placeholder="Enter Name" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPhone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control ref={input => this._newNumber = input} type="text" placeholder="Enter Phone" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </Container>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
	return {
	  // You can now say this.props.nextid
	  nextid: state.nextid
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
	// You can now say this.props.createContact
      createContact: (name, number, id) => dispatch(createContact(name, number, id)),
      nextId:()=> dispatch(nextId())
	}
};
//export default Add
export default connect(mapStateToProps, mapDispatchToProps)(Add);