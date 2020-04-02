import React, { Component } from "react";
import styled from 'styled-components'
import { connect } from 'react-redux'
import { goBack } from 'connected-react-router'

import { signup } from '../../actions'

import ButtonStyle from '../../components/button'
import ButtonAppBar from '../../components/AppBar'
import MyTextField from '../../components/input'

const PageWrapper = styled.div`
   width: 100%;
   height: calc(100vh - 16px);
   display:flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: center;
   background-color:#EDF1F9;
`
const ContentWrapper = styled.div`
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
  width: 35%;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:center;
`

class RegisterPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        username: '',
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

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.submitForm(this.state.form)
    this.setState({
      form: {
        username: '',
        password: '',
        email: '',
      }
    })
  }

  render() {
    return (
      <PageWrapper>
        <ButtonAppBar pageName='Registre-se' btnText='VOLTAR' onClick={this.props.goBackToLogin} />
        <ContentWrapper>
          <FormStyle onSubmit={this.handleSubmit}>
            <MyTextField
              name="username"
              type="text"
              label="Nomde do Usuário"
              required={true}
              onChange={this.handleInputValue}
              value={this.state.form.username} />
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
              label="Senha"
              required={true}
              onChange={this.handleInputValue}
              value={this.state.form.password} />
            <ButtonStyle type='submit' btnText="Cadastrar" />
          </FormStyle>
        </ContentWrapper>
      </PageWrapper>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  goBackToLogin: () => dispatch(goBack()),
  submitForm: (form) => dispatch(signup(form))
})

export default connect(null, mapDispatchToProps)(RegisterPage)