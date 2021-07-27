import React, { Component } from 'react'
import {Col,Image,Row,Tabs,Tab} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import {setGitProfile}  from '../../reducers/Profile';
class Profile extends Component {
	constructor(props){
		super(props)
	}

	componentDidMount(){
		this.props.setProfileData();
	}

  render() {
  	const {avatar_url,bio,name} = this.props.profile
    return (
  		<div>
  			<Image src={avatar_url}/>
  			<h6>{bio}</h6>
  			<h5 className="user-name">{name}</h5>
  		</div>	
    )
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.Profile.profile
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setProfileData: () => dispatch(setGitProfile())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Profile);


