import {getUserInfo} from '../helpers/git/ServicesHelper'
function RepoProfileAction(profile) {
  return {type: "SET_PROFILES",payload:profile}
};

export const setGitProfile =  (data) => async(dispatch) =>{
  var response = await getUserInfo();
	dispatch(RepoProfileAction(response.data))
}

const initialState = {profile: []}
const profile = (state = initialState, action) => {
	switch (action.type) {
  	case 'SET_PROFILES':
      return { profile: action.payload}; 
  }
  return state
}

export default profile;