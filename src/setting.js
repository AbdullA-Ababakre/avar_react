/*
 * @Descripttion:
 * @Author: 热伊木
 * @Date: 2022-06-02 01:02:34
 * @LastEditTime: 2022-06-13 07:01:05
 */
// 请求接口地址 如果没有配置自动获取当前网址路径

const Url = `https://avarlab.com/api/v1`;
const API_URL = Url || `${window.location.origin}/api/v1`;

const Setting = {
  // 接口请求地址
  apiBaseURL: API_URL,
  // 路由模式，可选值为 history 或 hash
  routerMode: "history",
  // 页面切换时，是否显示模拟的进度条
  showProgressBar: true,
};

const WithoutAuthorization = [
  "/user/login",
  "/user/register",
  "/product/list",
  "/product/detail/",
];

export { Setting, WithoutAuthorization };
