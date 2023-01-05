import React, {useState} from "react";
import {Link, useHistory} from "react-router-dom";

import * as Yup from "yup";
import {Field, Form, Formik} from 'formik';

import UserService from "../../../services/UserService";

import {setToLocalStorage} from "../../../utils/storage";

import SubmitButton from "../../Shared/SubmitButton/SubmitButton";
import Input from "../../Shared/Input/Input";

import './signIn.scss'
import {useDispatch} from "react-redux";
import {actionCreator} from "../../../store/actions";

const signInValidationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
})

const SignIn = (props) => {
  let history = useHistory();
  const dispatch = useDispatch();

  const [error, setError] = useState('');

  const initialValues = {
    username: '',
    password: ''
  }

  const handleSubmit = (value) => {
    UserService.signIn(value).then(response => {
        if (response.status === 200) {
          setError('')
          setToLocalStorage('token', response.data.access);
          dispatch(
            actionCreator.authenticateSuccess(response.data.access)
          )
          history.push(props.location.state.url);
        }
      }
    ).catch((error) => setError('The username or password is incorrect'))
  }

  return (
    <div className="sign-in__wrapper">
      <div className="sign-in__logo">
        Sign in to your account
      </div>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={signInValidationSchema}
      >
        {(formikProps) => {
          return (
            <Form className="sign-in__form">
              <div className="sign-in__top-of-login"/>
              <span className="sign-in__error">{error}</span>
              <Field
                className="sign-in__input btn"
                label="Username"
                type="text"
                name="username"
                placeholder="Username"
                component={Input}
              />
              <Field
                component={Input}
                label="Password"
                type="password"
                name="password"
                className="sign-in__input btn"
                placeholder="Password"
              />
              <Link to={"sign-up"}>
                Don't have an account yet? Sign up
              </Link>
              <SubmitButton title="Submit" formikProps={formikProps}/>
            </Form>
          )
        }
        }
      </Formik>
    </div>
  )
}

export default SignIn;