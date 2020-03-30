import React, { Component } from "react";
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { routes } from '../Router'

import Button from '@material-ui/core/Button';
import styled from "styled-components";





class LoginPage extends Component {
  render() {
    return (
      <div>
        <form>
        <input type="" placeholder="Email"/>
        <input type="" placeholder="senha"/>
        <Button 
        variant="contained" 
        size="medium"> Entrar</Button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
    return {
      goToRegisterPage: () => dispatch (push(routes.register))
    }
}



export default connect(null, mapDispatchToProps)(LoginPage);
