import React from 'react';
import '../../../styles/SearchBox.css';
import Autocomplete from 'react-autocomplete';
import { Redirect } from 'react-router-dom';
export default class Search extends React.Component {

    constructor(props, context) {
        super(props, context);

        // Set initial State
        this.state = {
            redirect:false,
            // Current value of the select field
            value: "",
            // Data that will be rendered in the autocomplete
            // As it is asynchronous, it is initially empty
            autocompleteData: []
        };

        this.onChange = this.onChange.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.getItemValue = this.getItemValue.bind(this);
        this.renderItem = this.renderItem.bind(this);
        this.retrieveDataAsynchronously = this.retrieveDataAsynchronously.bind(this);
    }


    /**
     * Updates the state of the autocomplete data with the remote data obtained via AJAX.
     * 
     * @param {String} searchText content of the input that will filter the autocomplete data.
     * @return {Nothing} The state is updated but no value is returned
     */
    retrieveDataAsynchronously(searchText){
        let _this = this;

        // Url of your website that process the data and returns a
        let url = `http://localhost:5000/api/employees/all`;
        
        // Configure a basic AJAX request to your server side API
        // that returns the data according to the sent text
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'json';
        xhr.onload = () => {
            let status = xhr.status;

            if (status === 200) {
                // In this example we expect from the server data with the structure of:
                // [
                //    {
                //        label: "Some Text",
                //        value: 1,
                //    },
                //    {
                //        label: "Some Other Text",
                //        value: 1,
                //    },
                // ]
                // But you can obviously change the render data :)

                // Update the state with the remote data and that's it !
                let arr = xhr.response.filter((str) => str.lastName.includes(this.state.value) || str.firstName.includes(this.state.value) );
                console.log(arr);
                
                _this.setState({

                    autocompleteData: arr
                });

                // Show response of your server in the console
                
               } else {
                console.error("Cannot load data from remote source");
            }
        };

        xhr.send();
    }
    
    /**
     * Callback triggered when the user types in the autocomplete field
     * 
     * @param {Event} e JavaScript Event
     * @return {Event} Event of JavaScript can be used as usual.
     */
    onChange(e){
        this.setState({
            value: e.target.value
        });

        /**
         * Handle the remote request with the current text !
         */
        this.retrieveDataAsynchronously(e.target.value);

        console.log("The Input Text has changed to ", e.target.value);
    }

    /**
     * Callback triggered when the autocomplete input changes.
     * 
     * @param {Object} val Value returned by the getItemValue function.
     * @return {Nothing} No value is returned
     */
    onSelect(val){
        this.setState({
            value: val
        });


        fetch('http://localhost:5000/api/employees/employee/'+val)
        .then(response => response.json())
        .then(info => console.log(info))
        .then(fetch('http://localhost:5000/api/employees/employee/info/'+val)
        .then(response => response.json())
        .then(info=>console.log(info)));
        this.setState({redirect:!this.redirect});


    }

    /**
     * Define the markup of every rendered item of the autocomplete.
     * 
     * @param {Object} item Single object from the data that can be shown inside the autocomplete
     * @param {Boolean} isHighlighted declares wheter the item has been highlighted or not.
     * @return {Markup} Component
     */
    renderItem(item, isHighlighted){
        return (
            <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                {item.firstName}   {item.lastName}    
            </div>   
        ); 
    }

    /**
     * Define which property of the autocomplete source will be show to the user.
     * 
     * @param {Object} item Single object from the data that can be shown inside the autocomplete
     * @return {String} val
     */
    getItemValue(item){
        // You can obviously only return the Label or the component you need to show
        // In this case we are going to show the value and the label that shows in the input
        // something like "1 - Microsoft"
        return `${item.embg}`;
    }

    render() {
        
        return (
        this.state.redirect ?  <Redirect
  to={{
    pathname: "/details",
    state:{
    key:this.state.value
},
  }}
/> :(
          
<form className="search-bar-form form-inline md-form form-sm mt-0">
   
     
  <i className="fas fa-search" aria-hidden="true"></i>
  <Autocomplete className="search-input form-control form-control-sm ml-3 w-75"
                    getItemValue={this.getItemValue}
                    items={this.state.autocompleteData}
                    renderItem={this.renderItem}
                    value={this.state.value}
                    onChange={this.onChange}
                    onSelect={this.onSelect}
                     inputProps={{ className:this.props.classes, placeholder:"Search employees"  }}
                />
                   
            </form>)  
        );
    }
}


          