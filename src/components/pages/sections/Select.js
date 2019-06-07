import React from 'react';

class Select extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			options:[],
		};

	}

  componentDidMount(){
    
 fetch('http://localhost:5000/api/Departments/all')
     .then((res2) => res2.json())
     .then((data2) => 
     this.setState({options:data2}))
 }
render(){

 let options = this.state.options;
 let optionItems = options.map((opt) => {
   		if(this.props.default === opt.departmentId)
               return ( <option name={opt.departmentId} selected key={opt.departmentId}>{opt.departmentName} </option>)
        else
     return (<option name={opt.departmentId} key={opt.departmentId}>{opt.departmentName}</option>)
        }

            );


   
			return(
				this.state.options.length > 0 ? (
		<select className="browser-default custom-select "  onChange={this.props.onselect}>
			{optionItems}
		</select>
				) : (
				<select className="browser-default custom-select">
				<option>Loading items</option>
				</select>)
)

		}
}
export default Select;
