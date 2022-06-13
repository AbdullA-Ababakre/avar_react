/*
 * @Descripttion:
 * @Author: 热伊木
 * @Date: 2022-06-13 05:36:36
 * @LastEditTime: 2022-06-13 05:40:36
 */

import request from "./request";

/*
 * 注册
 * */
export function Register(data) {
  return request({
    url: "/user/register",
    method: "post",
    data,
  });
}

/*
 * 登录
 * */
export function Login(data) {
  return request({
    url: "/user/login",
    method: "post",
    data,
  });
}

/**
 * 退出登陆
 * @constructor
 */
export function Logout() {
  return request({
    url: "/user/logout",
    method: "get",
  });
}

/**
 * 获取用户信息
 */
export function Info() {
  return request({
    url: "/login/info",
    method: "get",
  });
}
