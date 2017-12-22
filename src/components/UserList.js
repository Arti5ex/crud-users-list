import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';

import UserRow from './UserRow';
import UserFormUpdate from './UserFormUpdate';

import * as user from "../actions/userActions";

@connect((store) => {
  return{
    users: store.user.users,
    updateUser: store.user.updateUser
  };
})

export default class UserList extends React.Component {
  
  render() {
    let submit = values => {
      this.props.dispatch(user.updateUser(values));
      this.props.dispatch(user.showUpdateUserForm(null));
    }

    const {users, updateUser} = this.props;

    return (
      !users ? '' : users.map((item, index) => {
        item.index = index;

        if(updateUser === index){
          return <div className="user-update-wrapper"><UserFormUpdate onSubmit={submit} user={item} key={index} type={'create'}/></div>;
        } else {
          return <UserRow user={item} key={index}/>;
        }
      })
    )
  }
}