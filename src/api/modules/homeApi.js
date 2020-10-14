import request from '../request'

export function homeList(data) {
  return request.post('/home/List', data)
}
