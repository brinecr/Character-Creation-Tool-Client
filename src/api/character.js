import apiUrl from '../apiConfig'
import axios from 'axios'

// Create Character
export const createCharacter = (credentials, user) => {
  return axios({
    method: 'POST',
    headers: {
      'Authorization': `Token ${user.token}`
    },
    url: apiUrl + 'characters/',
    data: {
      character: {
        _id: credentials._id,
        name: credentials.name,
        description: credentials.description,
        hit_points: credentials.hit_points,
        attack_power: credentials.attack_power,
        dead: credentials.dead
      }
    }
  })
}

// Update Character
export const updateCharacter = (credentials, user) => {
  return axios({
    url: apiUrl + 'characters/' + user._id,
    method: 'PATCH',
    headers: {
      'Authorization': `Token ${user.token}`
    },
    data: {
      character: {
        hit_points: 10
      }
    }
  })
}

// Delete Character
export const deleteCharacter = user => {
  return axios({
    url: apiUrl + 'characters/' + user._id,
    method: 'DELETE',
    headers: {
      'Authorization': `Token ${user.token}`
    }
  })
}

// Get Character
export const getCharacter = user => {
  return axios({
    url: apiUrl + 'characters/' + user._id,
    method: 'GET'
  })
}
