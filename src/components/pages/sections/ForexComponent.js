import React from 'react';
import { MDBCard, MDBCardBody, MDBListGroup, MDBListGroupItem, MDBBadge, MDBIcon } from 'mdbreact';
class ForexComponent extends React.Component {

	constructor(){
		super();
		this.state = {
			usd:"",
			eur:"",
			aud:""
		};

	}
	componentDidMount(){
		fetch('http://www.floatrates.com/daily/mkd.json')
		.then((response) => response.json())
		.then((info) => this.setState({
			usd:info.usd.inverseRate,
			aud:info.aud.inverseRate,
			eur:info.eur.inverseRate

		}) )
	}
	render(){
			let usd = this.state.usd;
			let aud = this.state.aud;
			let eur = this.state.eur;
		return(
<React.Fragment>
<MDBCard className="mb-4">
                        <MDBCardBody>
                            <MDBListGroup className="list-group-flush">
                                <MDBListGroupItem>
                                    EUR
                                    <MDBBadge color="success-color" pill className="float-right">
                                    {Math.round(eur * 100) / 100}
                                                     <MDBIcon icon="arrow-up" className="ml-1"/>
                                    
                                    </MDBBadge>
                                </MDBListGroupItem>
                                <MDBListGroupItem>
                                    USD
                                    <MDBBadge color="danger-color" pill className="float-right">
                                     {Math.round(usd * 100) / 100}
                                        <MDBIcon icon="arrow-down" className="ml-1"/>
                                    </MDBBadge>
                                </MDBListGroupItem>
                                <MDBListGroupItem>
                                    AUD
                                    <MDBBadge color="primary-color" pill className="float-right">
                                     {Math.round(aud * 100) / 100}
									
                                    </MDBBadge>
                                </MDBListGroupItem>
                           
                            </MDBListGroup>
                        </MDBCardBody>
                    </MDBCard>

</React.Fragment>


)
}
}

export default ForexComponent;