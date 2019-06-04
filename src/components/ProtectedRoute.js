import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import decode from 'jwt-decode';


const ProtectedRoute = ({component:Component, ...rest}) => {
		const token = localStorage.getItem('token');
	return (

		<Route {...rest}
		render={ props=>{

			if((token != null) && !(decode(token).exp < new Date().getTime()/1000)){
				console.log(decode(token).exp);	
				return <Component {...props}/>
			}
			else {
				return (
				<Redirect to={{
						pathname:'/login',
						state:{
							from:props.location
					}
				}}/>
				)
			}
		}}/>)}
	export default ProtectedRoute;