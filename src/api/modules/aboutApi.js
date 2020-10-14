import request from '../request'

export function aboutList(data) {
  return request.post('/about/List', data)
}
