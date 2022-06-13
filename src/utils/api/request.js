/*
 * @Descripttion:
 * @Author: 热伊木
 * @Date: 2022-06-13 04:42:27
 * @LastEditTime: 2022-06-13 08:01:57
 */
import axios from "axios";
import { Setting, WithoutAuthorization } from "../../setting";

//创建一个axios实例对象
const instance = axios.create({
  baseURL: Setting.apiBaseURL, // api的base_url
  timeout: 10000, // 请求超时时间
  withCredentials: false, // 选项表明了是否是跨域请求
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

//请求前做一下拦截(拦截器),传入两个参数(一个是成功的回调函数,一个是失败的)
instance.interceptors.request.use(
  (config) => {
    // console.log(config.url);
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["access-token"] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//响应结果后的拦截
instance.interceptors.response.use(
  (result) => {
    //result  后端返回的数据结果
    return result.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
