import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';

import * as user from "../actions/userActions";

@connect((store) => {
  return{
  };
})

export default class UserRow extends React.Component {

  deleteUser(){
    this.props.dispatch(user.deleteUser(this.props.user.index));
  }

  updateUser(){
    this.props.dispatch(user.showUpdateUserForm(this.props.user.index));
  }

  render() {
    return (
      <div className="user-row">
        <div className="name">{this.props.user.nameFull}</div>
        <div className="buttons">
          <div className="update-button" onClick={(e) => this.updateUser()}>Редактировать</div>
          <div className="delete-button" onClick={(e) => this.deleteUser()}>Удалить</div>
        </div>
        {this.props.user.dayBirth && <div>Дата рождения: {this.props.user.dayBirth}/{this.props.user.monthBirth}/{this.props.user.yearBirth}</div>}
        {this.props.user.city && <div>Город: {this.props.user.city}</div>}
        {this.props.user.address && <div>Адрес: {this.props.user.address}</div>}
        {this.props.user.phone && <div>Телефон: {this.props.user.phone}</div>}
      </div>     
    )
  }
}