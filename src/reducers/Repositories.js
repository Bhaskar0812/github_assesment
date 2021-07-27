import {getRepoInfo} from '../helpers/git/ServicesHelper'

function repoAction(repos) {
  return {type: "SET_REPOS",payload:repos}
};

export const setGitRepo =  (data) => async(dispatch) =>{
  var response = await getRepoInfo();
	dispatch(repoAction(response.data))
}

const initialState = {repos: []}
const repositories = (state = initialState, action) => {
	switch (action.type) {
  	case 'SET_REPOS':
      return { repos: action.payload}; 
  }
  return state
}

export default repositories;