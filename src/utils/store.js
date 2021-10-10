import { createStore } from 'redux'

const initialState = {
}

function saveToLocalStorage (state) {
  try {
    const serializedSate = JSON.stringify(state)
    // eslint-disable-next-line no-undef
    localStorage.setItem('state', serializedSate)
  } catch (e) {
    console.log(e)
  }
}

function loadFromLocalStorage () {
  try {
    // eslint-disable-next-line no-undef
    const serializedSate = localStorage.getItem('state')
    if (serializedSate === null) return undefined
    return JSON.parse(serializedSate)
  } catch (e) {
    return undefined
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        userProfile: action.data.userProfile,
        userStatus: 'LOGGED'
      }

    case 'LOGIN_PROCESS':
      return {
        ...state,
        userStatus: 'LOGIN_PROCESS'
      }

    case 'LOGIN_FAIL':
      return {
      }

    case 'LOGOUT': {
      return {
      }
    }

    case 'UPDATE_TOKEN':
      return {
        ...state,
        userToken: action.data.token
      }
    case 'REGISTER_PENDING':
      return {
        register: action.data.register,
        temporal: action.data.temporal
      }
    case 'REGISTER_UPDATE':
      return {
        ...state,
        register: action.data.register
      }
    case 'UPDATE_USER_INFO':
      return {
        ...state,
        userProfile: action.data
      }

    case 'UPDATE_USER_GAMES':
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          games: action.data
        }
      }

    case 'UPDATE_USER_SETUP':
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          setup: action.data
        }
      }

    case 'UPDATE_USER_TAGS':
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          tags: action.data
        }
      }

    case 'UPDATE_USER_STATUS':
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          status: action.data
        }
      }

    case 'UPDATE_USER_PROFILE_IMAGE':
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          profileImgUrl: action.data
        }
      }

    default:
      return state
  }
}

const persistedState = loadFromLocalStorage()

const store = createStore(
  reducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => saveToLocalStorage(store.getState()))

export default store
