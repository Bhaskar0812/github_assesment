import axios from 'axios';
import qs from 'qs';

export const axiosGet = async (url) => {
  let config = {
    headers: {
      Authorization: "Basic bhaskar0812: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"
    }
  }
  var response = await axios.get(url,config).then(response => { 
    return response;
  })
  .catch(error => {
    return {data:{'status':'fail'}};
  });
  return response;
}
