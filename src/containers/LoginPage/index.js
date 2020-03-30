import React, { Component } from "react";
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { routes } from '../Router'
import ButtonAppBar from "../../components/AppBar";

import ButtonStyle from '../../components/button'
import styled from "styled-components";
import MyTextField from '../../components/input'




class LoginPage extends Component {
  render() {
    return (
      <div>
        <ButtonAppBar pageName='LOGIN' btnText='CADASTAR' onClick={this.props.goToRegisterPage} />
        <form>
          <MyTextField
            name="email"
            type="email"
            label="Email"
            required={true}
            onChange=""
            value="" />
          <MyTextField
            name="password"
            type="password"
            label="senha"
            required={true}
            onChange=""
            value=""
          />
          <ButtonStyle btnText="Entrar"/>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    goToRegisterPage: () => dispatch(push(routes.register))
  }
}



export default connect(null, mapDispatchToProps)(LoginPage);
