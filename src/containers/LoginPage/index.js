import React, { Component } from "react";
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { routes } from '../Router'
import ButtonAppBar from "../../components/AppBar";

import ButtonStyle from '../../components/button'
import styled from "styled-components";
import MyTextField from '../../components/input'
import { login } from "../../actions";




class LoginPage extends Component {
    constructor(props){
      super(props)
      this.state = {
        form: {
          password: '',
          email: '',
        }
    }
 }

 handleInputValue = (e) => {
  this.setState({
    form: {
      ...this.state.form,
      [e.target.name]: e.target.value
    }
  })
}
 
 handleSubmit= (e) => {
    e.preventDefault()
    this.props.login(this.state.form)
    this.setState({
      form: {
        password: '',
        email: '',
      }
    })
  }
 
 
  render() {
    return (
      <div>
        <ButtonAppBar pageName='LOGIN' btnText='CADASTAR' onClick={this.props.goToRegisterPage} />
        <form onSubmit={this.handleSubmit}>
          <MyTextField
            name="email"
            type="email"
            label="Email"
            required={true}
            onChange={this.handleInputValue}
            value={this.state.form.email} />
          <MyTextField
            name="password"
            type="password"
            label="senha"
            required={true}
            onChange={this.handleInputValue}
            value={this.state.form.password}
          />
          <ButtonStyle type="submit" btnText="Entrar"/>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    goToRegisterPage: () => dispatch(push(routes.register)), 
    login: (form) => dispatch(login(form))
  }
}



export default connect(null, mapDispatchToProps)(LoginPage);
