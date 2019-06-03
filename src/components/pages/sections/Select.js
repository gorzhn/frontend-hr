import React from 'react';

class Select extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			options:[],
		};

	}

  componentDidMount(){
    
 fetch('https://api.myjson.com/bins/14oelj')
     .then((res2) => res2.json())
     .then((data2) => 
     this.setState({options:data2}))
 }
render(){

	let options = this.state.options;
   let optionItems = options.map((opt) =>
                <option name={opt.departmentId} key={opt.departmentId}>{opt.departmentName}</option>
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
