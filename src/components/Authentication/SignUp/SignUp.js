import React from "react";
import {Link, useHistory} from "react-router-dom";

import * as Yup from "yup";
import {Field, Form, Formik} from 'formik';

import UserService from "../../../services/UserService";
import SubmitButton from "../../Shared/SubmitButton/SubmitButton";
import Input from "../../Shared/Input/Input";

import './signUp.scss'

const signUpValidationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required').min(6, 'Username must be at least 6 characters').max(20, 'Username must not exceed 20 characters'),
  email: Yup.string().required('Email is required').email('Email is invalid'),
  password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters').max(40, 'Password must not exceed 40 characters'),
  confirmPassword: Yup.string().required('Confirm Password is required').oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
})

const SignUp = () => {
  let history = useHistory();

  const initialValues = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  }

  const handleSubmit = (value) => {
    UserService.signUp(value).then(response => {
        if (response.status === 201) {
          history.push('/sign-in');
        }
      }
    )
  }

  return (
    <div className="sign-up__wrapper">
      <div className="sign-up__logo">
        Sign up
      </div>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={signUpValidationSchema}
      >
        {(formikProps) => {
          return (
            <Form className="sign-up__form">
              <div className="sign-up__top-of-login"/>
              <Field
                className="sign-up__input btn"
                label="Username"
                type="text"
                name="username"
                placeholder="Username"
                component={Input}
              />
              <Field
                component={Input}
                label="Email"
                type="text"
                name="email"
                className="sign-up__input btn"
                placeholder="Password"
              />
              <Field
                component={Input}
                label="Password"
                type="password"
                name="password"
                className="sign-up__input btn"
                placeholder="Password"
              />
              <Field
                component={Input}
                label="Confirm password"
                type="password"
                name="confirmPassword"
                className="sign-up__input btn"
                placeholder="Confirm password"
              />
              <Link to={"sign-in"}>
                You have an account already? Sign in
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

export default SignUp;