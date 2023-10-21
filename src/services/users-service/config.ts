// import { AxiosResponse } from 'axios'
import api from '../api'

const token = localStorage.getItem('token')

// GET request
export const getRegisterUsers = async (page: number) => {
  try {
    const users = await api.get(`/users`, {
      headers: { Authorization: `Bearer ${token}` },
      params: {
        page,
        size: 5,
      },
    })
    return users.data
  } catch (error) {
    console.error('Ocorreu um erro!', error)
  }
}

export const getUsersByType = async (type: string, page: number) => {
  try {
    const users = await api.get(`/users/profile?type=${type}`, {
      headers: { Authorization: `Bearer ${token}` },
      params: {
        page,
        size: 5,
      },
    })
    return users.data
  } catch (error) {
    console.error('Ocorreu um erro!', error)
  }
}

// GET request for search data
export const getSearch = async (search: string) => {
  try {
    const users = await api.get(`/users`, {
      headers: { Authorization: `Bearer ${token}` },
      params: {
        search,
      },
    })
    return users.data
  } catch (error) {
    console.error('Ocorreu um erro!', error)
  }
}

// GET COUNTER request
export const getCounterTotalUsers = async () => {
  try {
    const totalAllUsers = await api.get(`/users/count`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    return totalAllUsers.data
  } catch (error) {
    console.error('Ocorreu um erro!', error)
  }
}