import React, {Component} from 'react';
import { Button } from 'react-bootstrap'

class Contact extends Component{
    

  render() {
        return (
			      <tr>
                <td>{this.props.id}</td>
                <td>{this.props.name}</td>
                <td>{this.props.number}</td>
                <td><Button onClick={this.props.onDel} variant="danger">Delete</Button></td>
            </tr>
		)
  }
}

export default Contact