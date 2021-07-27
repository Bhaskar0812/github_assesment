import React, { Component } from 'react'
import {Col,Image,Row,Tabs,Tab,Card,Form} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import {setGitRepo}  from '../../reducers/Repositories';
class Repos extends Component {
	constructor(props){
		super(props)
		this.state = {repos:[],isFilter:0}
	}

	componentDidMount(){
		this.props.setRepositories();
	}

	componentDidUpdate(prevProps,prevState){
		if(prevProps.repos.length != this.props.repos.length && this.state.isFilter == 0){
			this.setState({repos:this.props.repos})
		}
	}

	filterRepos(value){
		if(value != ""){
			const regexp = new RegExp(value, 'i');
			var repos = this.props.repos.filter((repo)=>{
				return regexp.test(repo.name);
			})  
			this.setState({repos:repos,isFilter:1})
		}else{
			this.setState({repos:this.props.repos})
		}
	}


  render() {
  	
    return (
  		<div>
  			<Tabs defaultActiveKey="Repositories" id="uncontrolled-tab-example" className="mb-3">
				  <Tab eventKey="Repositories" title="Repositories">
				  	<Form.Group as={Row} className="input-field">
					    <Col lg={8} >	
					    	<Form.Control type="text" placeholder="Search Repository" onChange={(e)=>this.filterRepos(e.target.value)}/>
					    </Col>	
					  </Form.Group>
			    	{
			    		this.state.repos.map((repo,index) => (
		    				<Card key={index} className="bg-light text-black card-repo">
							    <a target="_blank" href={repo.owner.html_url+'/'+repo.name}>
							    	<Card.Title className="repo-text">{repo.name}</Card.Title>
							    </a>	
							    <p className="card-repo-paragraph">{repo.description}</p>
							    <p className="card-repo-paragraph">{"updated_at: "+repo.updated_at}</p>
							    
								</Card>
							))
						}
				  </Tab>
				</Tabs>
  			
  		</div>	
    )
  }
}

const mapStateToProps = (state) => {
  return {
    repos: state.Repositories.repos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setRepositories: () => dispatch(setGitRepo())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Repos);


