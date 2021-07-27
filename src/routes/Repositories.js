
function RepoAction(repositories) {
  return {type: "SET_REPOS",payload:repositories,}
};


export const setPlayer = (data) => (dispatch) =>{
	dispatch(RepoAction(data))
}

const initialState = {repositories: []}
const repositories = (state = initialState, action) => {
	switch (action.type) {
  	case 'SET_repositories':
      return { repositories: action.payload}; 
  }
  return state
}

export default repositories;