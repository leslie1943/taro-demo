import Request from '../../utils/request'

export const login = params => {
  console.info('params', params)
  // const ss = {
  //   identifier: params.user,
  //   password: params.password
  // }
  return Request({
    url: '/base/getCurrentTime',
    method: 'GET',
    // data: ss
  })
}