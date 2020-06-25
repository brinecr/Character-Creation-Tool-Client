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
// export const updateCharacter = (credentials, user) => {
//   return axios({
//     url: apiUrl + 'characters/' + user._id,
//     method: 'PATCH',
//     headers: {
//       'Authorization': `Token ${user.token}`
//     },
//     data: {
//       character: {
//         hit_points: 10
//       }
//     }
//   })
// }

// Heal Character
export const healCharacter = (characterid, user, name, description) => {
  return axios({
    url: apiUrl + 'characters/' + characterid + '/',
    method: 'PATCH',
    headers: {
      'Authorization': `Token ${user.token}`
    },
    data: {
      character: {
        hit_points: 10,
        dead: false,
        name: name,
        description: description
      }
    }
  })
}

// Hurt Character
// export const hurtCharacter = (characterid, user, name, description) => {
//   return axios({
//     url: apiUrl + 'characters/' + characterid + '/',
//     method: 'PATCH',
//     headers: {
//       'Authorization': `Token ${user.token}`
//     },
//     data: {
//       character: {
//         hit_points: 9,
//         name: name,
//         description: description
//       }
//     }
//   })
// }

// Kill Character
export const killCharacter = (characterid, user, name, description) => {
  return axios({
    url: apiUrl + 'characters/' + characterid + '/',
    method: 'PATCH',
    headers: {
      'Authorization': `Token ${user.token}`
    },
    data: {
      character: {
        hit_points: 0,
        dead: true,
        name: name,
        description: description
      }
    }
  })
}

// Delete Character
export const deleteCharacter = (characterid, user) => {
  return axios({
    url: apiUrl + 'characters/' + characterid,
    method: 'DELETE',
    headers: {
      'Authorization': `Token ${user.token}`
    }
  })
}

// Get Characters
export const getCharacters = user => {
  return axios({
    url: apiUrl + 'characters/',
    method: 'GET',
    headers: {
      'Authorization': `Token ${user.token}`
    }
  })
}

// Get Character
export const getCharacter = (characterid, user) => {
  return axios({
    url: apiUrl + 'characters/' + characterid + '/',
    method: 'GET',
    headers: {
      'Authorization': `Token ${user.token}`
    }
  })
}
