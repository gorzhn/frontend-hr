import React from 'react';

class SelectJob extends React.Component {
constructor(props){
		super(props);
		this.state = {
			options:[],

		};
			}
componentDidMount(){
    
 fetch('http://localhost:5000/api/Jobs/all')
     .then((res2) => res2.json())
     .then((data2) => 
     this.setState({options:data2}));
 }

render(){

 let options = this.state.options;
 let optionItems = options.map((opt) => {
   		if(this.props.default === opt.jobId)
               return ( <option name={opt.jobId} selected key={opt.jobId}>{opt.jobName} </option>)
        else
     return (<option name={opt.jobId} key={opt.jobId}>{opt.jobName}</option>)
        }
        )
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















