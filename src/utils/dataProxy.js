import axios from 'axios';

export const baseUrl = 'http://192.168.199.213:3000';

// axios的实例及拦截器配置
const request = axios.create({
  baseURL: baseUrl,
});

request.interceptors.response.use(
  res => res.data,
  err => {
    console.log(err, '网络错误');
  },
);

export default request;
