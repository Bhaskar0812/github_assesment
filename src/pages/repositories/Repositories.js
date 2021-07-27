import React, { Component } from 'react'
import {Col,Image,Row,Tabs,Tab} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Profile from '../components/Profile';
import Repos from '../components/Repos';
class Repositories extends Component {
	constructor(props){
		super(props)
	}
  render() {	
    return (
    	<Row className="container">
    		<Col lg={3}>
    			<Profile />
    		</Col>
    		<Col lg={9}>	
	    		<Repos />
	    	</Col>	
			</Row>	
    )
  }
}

export default Repositories;


