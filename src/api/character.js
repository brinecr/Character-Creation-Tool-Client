import apiUrl from '../apiConfig'
import axios from 'axios'

export const createCharacter = (credentials, user) => {
  return axios({
    method: 'POST',
    headers: {
      'Authorization': `Token ${user.token}`
    },
    url: apiUrl + 'characters/',
    data: {
      user: {
        _id: credentials._id,
        character: {
          about: credentials.about,
          avatarUrl: credentials.avatarUrl,
          quote: credentials.quote,
          rank: credentials.rank,
          website: credentials.website
        }
      }
    }
  })
}
export const updateCharacter = (credentials, user) => {
  return axios({
    url: apiUrl + 'characters/' + user._id,
    method: 'PATCH',
    headers: {
      'Authorization': `Token ${user.token}`
    },
    data: {
      user: {
        _id: credentials._id,
        character: {
          about: credentials.about,
          avatarUrl: credentials.avatarUrl,
          quote: credentials.quote,
          rank: credentials.rank,
          website: credentials.website
        }
      }
    }
  })
}
export const deleteCharacter = user => {
  return axios({
    url: apiUrl + 'characters/' + user._id,
    method: 'DELETE',
    headers: {
      'Authorization': `Token ${user.token}`
    }
  })
}
export const getCharacter = user => {
  return axios({
    url: apiUrl + 'characters/' + user._id,
    method: 'GET'
  })
}
