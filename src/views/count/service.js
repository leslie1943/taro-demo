import Request from '../../utils/request'

export const homepage = data => {
  return Request({
    url: '/homepage-v3',
    method: 'GET',
    data
  })
}