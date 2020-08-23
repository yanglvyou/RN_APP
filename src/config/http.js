import axios from 'axios';
import Config from 'react-native-config';

axios.defaults.baseURL=Config.API_URL;


axios.interceptors.request.use(function(config){
    config.headers={
        icode:'24C7F80DC22B87D0',
    }
    return config;
},(error)=>{
    return Promise.reject(error)
})

//添加响应拦截器
axios.interceptors.response.use(function(response){
    return response.data;
},(error)=>{
    return Promise.reject(error)
})
