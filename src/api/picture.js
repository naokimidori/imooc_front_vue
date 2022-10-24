import request from '../utils/request'

export const getRecommendPic = () => {
  return request({
    url: '/curated'
  })
}
