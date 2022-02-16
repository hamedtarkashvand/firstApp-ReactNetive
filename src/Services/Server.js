import axios from 'axios'
import {API_KEY, BASE_URL} from './configServer'

const Server = axios.create({
    baseURL: `${BASE_URL}`,
  });

  Server.defaults.params={
    api_key:API_KEY
  }
  

  export default Server
