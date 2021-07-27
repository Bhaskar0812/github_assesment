import { axiosGet } from './RequestsHelper.js';

export const getUserInfo = async () => {
	return await axiosGet('https://api.github.com/users/defunkt');
}

export const getRepoInfo = async () => {
	return await axiosGet('https://api.github.com/users/defunkt/repos');
}
