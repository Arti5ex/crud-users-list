import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';

import UserFormCreate from './UserFormCreate';
import UserList from './UserList';

import * as user from "../actions/userActions";

@connect((store) => {
  return{
    showCreateUserForm: store.user.showUserForm
  };
})

export default class Main extends React.Component {  

  constructor(props, context) {
    super(props, context);
    this.props.dispatch(user.fetchUsers());
  }

  showUserForm(){
    this.props.dispatch(user.showUserForm());
  }

  render() {
    const {showCreateUserForm, userData} = this.props;
    let userCreateForm = '';

    let submit = (values) => {
      this.props.dispatch(user.createUser(values));
    }

    if(showCreateUserForm)
      userCreateForm = <div className="create-user-form-wrapper">
        <h4>Создать нового пользователя</h4><UserFormCreate onSubmit={submit}/></div>;
      
    return (
      <div className="container">
        <div className="create-user" onClick={(e) => this.showUserForm()}>+ Создать пользователя</div>
        {userCreateForm}
        <UserList/>
        <div className="clear"></div>
      </div>
    );
  }
}