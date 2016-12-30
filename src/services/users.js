import request from '../utils/request'

export function fetch({page=1}) {
  return request(`/api/users?_page=${page}&_limit=5`)
}

export function remove(id){
  console.log('server remove id>>', id)
  return request(`/api/users/${id}`,{
    method:'DELETE'
  })
}

export function patch(id, values){
  console.log('server patch')
  return request(`/api/users/${id}`,{
    method:'PATCH',
    body:JSON.stringify(values)
  })
}

export function create(values){
  console.log('server create')
  return request(`/api/users`,{
    method:'POST',
    body:JSON.stringify(values)
  })
}

