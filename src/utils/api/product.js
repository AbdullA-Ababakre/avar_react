/*
 * @Descripttion:
 * @Author: 热伊木
 * @Date: 2022-06-13 05:42:47
 * @LastEditTime: 2022-06-13 09:06:55
 */
import request from "./request";

/*
 * 商品列表
 * */
export function getList(params) {
  return request({
    url: "/product/list",
    method: "get",
    params,
  });
}

/*
 * 商品详情
 * */
export function getDetail(params) {
  return request({
    url: `/product/detail/${params.id}`,
    method: "get",
  });
}
