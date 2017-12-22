import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { Field, Fields, reduxForm } from 'redux-form';

import * as user from "../actions/userActions";

const UserFormUpdate = props => {

  const validate = values => {
    const errors = {}

    if (!values.nameFull) {
      errors.nameFull = 'Обязательное поле';
    } else if (values.nameFull.length > 100) {
      errors.nameFull = 'Имя должно быть меньше 100 символов';
    }

    if (!values.phone) {
      errors.phone = 'Обязательное поле';
    } else if (!/^\+7[0-9]{10}$/i.test(values.phone)) {
      errors.phone = 'Телефон должен быть в формате +7xxxxxxxxxx, 11 цифр';
    }

    if(!values.dayBirth || !values.monthBirth || !values.yearBirth) {
      errors.dayBirth = 'Обязательное поле';  
    }else if(!/^[0-3]{0,1}[0-9]{1}$/i.test(values.dayBirth) || !/^[0-1]{0,1}[0-9]{1}$/i.test(values.monthBirth) || !/^[0-9]{4}$/i.test(values.yearBirth)){
      errors.dayBirth = 'Недопустимая дата';  
    }

    return errors
  }

  const userField = ({
    input,
    label,
    type,
    meta: { touched, error }
  }) => (
    <div className="form-row">
      <label>{label}</label>
      <div>
        <input {...input} type={type} />
        {touched && (error && <div className="error">{error}</div>)}
      </div>
    </div>
  )

  const birthField = (fields) => (
    <div className="form-row">
      <label>Дата рождения</label>
      <div>
        <div className="birthFields">
          <input {...fields.dayBirth.input} type={fields.type} placeholder="день" />
          <input {...fields.monthBirth.input} type={fields.type} placeholder="месяц" />
          <input {...fields.yearBirth.input} type={fields.type} placeholder="год" />
        </div>
        {fields.dayBirth.meta.touched && (fields.dayBirth.meta.error && <div className="error">{fields.dayBirth.meta.error} </div>)}
      </div>
    </div>
  )

  const UserFormUpdateInnerForm = props => {
    const { handleSubmit } = props;
    
    const closeUserForm = () => {
      props.dispatch(user.showUpdateUserForm(null));  
    }

    return (
      <form onSubmit={handleSubmit}>
        <Field name="nameFull" component={userField} label="ФИО" type="text" placeholder=""/>
        <Fields names={['dayBirth', 'monthBirth', 'yearBirth']} component={birthField} type="text" />
        <Field name="address" component={userField} label="Адрес" type="text" />
        <Field name="city" component={userField} label="Город" type="text" />
        <Field name="phone" component={userField} label="Телефон" type="text" />
        <div className="buttons">
          <input type="submit" name="create" value="Сохранить" />
          <input type="button" name="close" value="Закрыть" onClick={(e) => closeUserForm(e)}/>
        </div>
      </form>
    )
  }

  const UserFormUpdateInner = reduxForm({
    form: 'userForm',
    validate,
    initialValues: {
      nameFull: props.user.nameFull,
      dayBirth: props.user.dayBirth,
      monthBirth: props.user.monthBirth,
      yearBirth: props.user.yearBirth,
      address: props.user.address,
      city: props.user.city,
      phone: props.user.phone,
      index: props.user.index,
    }
  })(UserFormUpdateInnerForm);

  return <UserFormUpdateInner {...props} />;
}

export default UserFormUpdate;