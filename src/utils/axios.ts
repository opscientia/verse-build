import axios from 'axios';


const httpClient = axios.create({
  baseURL: undefined,
  // baseURL: backendUrl,
});

export default httpClient;
