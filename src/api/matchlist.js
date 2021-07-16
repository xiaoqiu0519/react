import http from './http'

export const findRcMatchList = (params)=> http.post('tcs/rcMatchInfo/findRcMatchList',params)

export const batchUpdateMatchSaleStatus = (params)=> http.put('tcs/rcMatchInfo/batchUpdateMatchSaleStatus',params)
