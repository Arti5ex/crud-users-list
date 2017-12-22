export default function reducer(state={
  showUserForm: false,
  users: [],
  updateUser: '',
  showUserFormUpdate: null,
}, action){

  switch (action.type){
    case "SHOW_USER_FORM": {
      return{
        ...state,
        showUserForm: state.showUserForm ? false : true
      }
    }
    case "CREATE_USER": {
      const users = state.users ? state.users.concat(action.payload) : [action.payload];
      localStorage.setItem("users", JSON.stringify(users));

      return{
        ...state,
        users: users,
        showUserForm: false
      }
    }
    case "UPDATE_USER": {
      const users = state.users && state.users.map((item, index) => {
        if(index == action.payload.index){
          return action.payload;
        }

        return item;
      });

      localStorage.setItem("users", JSON.stringify(users));

      return{
        ...state,
        users: users,
        showUserForm: false
      }
    }
    case "FETCH_USERS": {
      return{
        ...state,
        users: action.payload
      }
    }
    case "DELETE_USER": {
      const users = state.users.filter((item, index) => {
        return index !== action.payload
      });

      localStorage.setItem("users", JSON.stringify(users));

      return{
        ...state,
        users: users,
      }
    }
    case "SHOW_UPDATE_USER_FORM": {
      return{
        ...state,
        updateUser: action.payload
      }
    }
  }

  return state
}
