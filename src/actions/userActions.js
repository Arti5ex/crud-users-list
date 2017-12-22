export function showUserForm(number){
  return {
    type: 'SHOW_USER_FORM',
    payload: number
  }
}

export function createUser(userData){
  return {
    type: 'CREATE_USER',
    payload: userData
  }
}

export function updateUser(userData){
  return {
    type: 'UPDATE_USER',
    payload: userData
  }
}

export function fetchUsers(){
  return {
    type: 'FETCH_USERS',
    payload: JSON.parse(localStorage.getItem("users")),
  }
}

export function deleteUser(userIndex){
  return {
    type: 'DELETE_USER', 
    payload: userIndex,
  }
}

export function showUpdateUserForm(userIndex){
  return {
    type: 'SHOW_UPDATE_USER_FORM', 
    payload: userIndex,
  }
}