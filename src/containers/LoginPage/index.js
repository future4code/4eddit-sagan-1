import React, { Component } from "react";
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { routes } from '../Router'
import ButtonAppBar from "../../components/AppBar";

import ButtonStyle from '../../components/button'
import styled from "styled-components";
import MyTextField from '../../components/input'
import { login } from "../../actions";


const PageWrapper = styled.div`
   width: 100%;
   height: calc(100vh - 16px);
   display:flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: center;
   background-color:#EDF1F9;
`

const ContentWrapper= styled.div`
  width: 100%;
  max-width: 900px;
  height: 100%;
  border-right: 2px solid #4472C4;
  border-left: 2px solid #4472C4;
  background-color: white;
  display:flex;
  justify-content:center;
  align-items:center;
`
const FormStyle = styled.form`
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:center;
`

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
      <PageWrapper>
        <ButtonAppBar pageName='LOGIN' btnText='CADASTAR' onClick={this.props.goToRegisterPage} />
        <ContentWrapper>
        <FormStyle onSubmit={this.handleSubmit}>
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
        </FormStyle>
        </ContentWrapper>
      </PageWrapper>
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
