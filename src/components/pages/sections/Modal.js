  import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';


class ModalPage extends Component {
  constructor(props){
    super(props);

this.state={
  modal7: this.props.display
}
}


toggle = nr => () => {
  let modalNumber = 'modal' + nr
  this.setState({
    [modalNumber]: !this.state[modalNumber]
  });
}

render() {
  return (
      <MDBContainer>
        
        <MDBBtn className="submit-button" color="primary" onClick={this.toggle(7)}>Submit </MDBBtn>
        <MDBModal isOpen={this.state.modal7} toggle={this.toggle(7)} side position="bottom-right">
          <MDBModalHeader toggle={this.toggle(7)}>Confirm</MDBModalHeader>
          <MDBModalBody>
            To proceed with this action click 'Save changes'<br/>
            If you changed your mind click close </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.toggle(7)}>Close</MDBBtn>
            <MDBBtn color="primary" onClick={this.props.onclick}>Save changes</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default ModalPage;