import React from 'react';

class SelectJob extends React.Component {
constructor(props){
		super(props);
		this.state = {
			options:[],

		};
			}
componentDidMount(){
    
 fetch('https://api.myjson.com/bins/10tglb')
     .then((res2) => res2.json())
     .then((data2) => 
     this.setState({options:data2}));
 }

render(){
	let options = this.state.options;
   let optionItems = options.map((opt) =>
                <option name={opt.job_id} key={opt.job_id}>{opt.job_name}</option>
            );
			return(
				this.state.options.length > 0 ?  (
		<select className="browser-default custom-select " onChange={this.props.onselect}>
			{optionItems}
		</select>
				) : (
				<select className="browser-default custom-select ">
			<option>Loading values</option>
		</select>
				)
				)
		}
}
export default SelectJob;















