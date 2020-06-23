import apiUrl from '../apiConfig'
import axios from 'axios'

export const createCharacter = (credentials, user) => {
  return axios({
    method: 'POST',
    headers: {
      'Authorization': `Token token=${user.token}`
    },
    url: apiUrl + '/character',
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
    url: apiUrl + '/character/' + user._id,
    method: 'PATCH',
    headers: {
      'Authorization': `Token token=${user.token}`
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
    url: apiUrl + '/character/' + user._id,
    method: 'DELETE',
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}
export const getCharacter = user => {
  return axios({
    url: apiUrl + '/character/' + user._id,
    method: 'GET'
  })
}
