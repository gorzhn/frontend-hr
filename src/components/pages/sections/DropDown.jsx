import React from 'react';

var values;

class DropDown extends React.Component {

    constructor(){
        super();
        this.state = {
            options: []
        }  
    }

    componentDidMount(){
        this.fetchOptions()
    }

    fetchOptions(){
        fetch('https://api.myjson.com/bins/14oelj')
            .then((res) => {
                return res.json();
            }).then((json) => {
                values = json;
                
                this.setState({options: values})
                console.log(values);
            });
    }
    render(){
        let options =  this.state.options.map((option, key) => <option key={option}>{key}</option>) 
        console.log(options);
        return (<div className="drop-down">
            <select className="mdb-select md-form" > 
               <option  selected="selected  ">Skopje Department </option>
                {options}
            </select>
            </div>
            )
    }
}

export default DropDown;