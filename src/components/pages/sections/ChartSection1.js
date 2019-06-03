import React, { Component } from 'react';
import { MDBCol, MDBCard, MDBCardBody, MDBCardHeader, MDBRow} from 'mdbreact';
import { Bar, Pie } from 'react-chartjs-2';
import ForexComponent from './ForexComponent.js'

class ChartSection1 extends Component {
    constructor(){
        super();
        this.state = {
            data:{}
        };
    }
    componentDidMount(){

        fetch('http://localhost:5000/api/statistics/all')
        .then((response) => response.json())
        .then((info) => this.setState({data:info}));

    }
    render(){
        const dataBar = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [
            {
                label: '#1',
                data: [12, 39, 3, 50, 2, 32, 84],
                backgroundColor: 'rgba(245, 74, 85, 0.5)',
                borderWidth: 1
            }, 
            ]
        };

        const barChartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
            xAxes: [{
                barPercentage: 1,
                gridLines: {
                display: true,
                color: 'rgba(0, 0, 0, 0.1)'
                }
            }],
            yAxes: [{
                gridLines: {
                display: true,
                color: 'rgba(0, 0, 0, 0.1)'
                },
                ticks: {
                beginAtZero: true
                }
            }]
            }
        }

    

        let male = 0;
        let female = 0;
for(let i in this.state.data.genders)
{ 
  this.state.data.genders[i].sex === "f" ? ++female : ++male;
}

           const dataPie = {
            labels: ['Male','Female'],
            datasets: [
            {
                data: [male,female],
                backgroundColor: ['#F7464A', '#46BFBD'],
                hoverBackgroundColor: ['#FF5A5E', '#5AD3D1']
            }
            ]
        }      
        
        return (
            <MDBRow className="mb-4">
                <MDBCol md="8"className="mb-4">
                    <MDBCard className="mb-4">
                        <MDBCardBody>
                            <Bar data={dataBar} height={500} options={barChartOptions} />
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol md="4" className="mb-4">
                    <MDBCard className="mb-4">
                        <MDBCardHeader>Gender representation</MDBCardHeader>
                        <MDBCardBody>
                            <Pie data={dataPie} height={300} options={{responsive: true}} />
                        </MDBCardBody>
                    </MDBCard>
                   
                    <ForexComponent />

                                    </MDBCol>
            </MDBRow>
        )
    }
}

export default ChartSection1;

