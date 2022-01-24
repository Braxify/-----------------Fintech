import api from '@/services/api'

export const getUsers = async () => {
  const { data } = await api.get('/users')
  return data
}
export const getUser = async (login: string) => {
  const { data } = await api.get(`/users/${login}`)
  return data
}