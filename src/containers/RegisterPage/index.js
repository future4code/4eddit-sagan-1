import React, { Component } from "react";
import Button from '@material-ui/core/Button';

class RegisterPage extends Component {
  render() {
    return (
      <div>
        <form>
        <input type="" placeholder="Nome do usuário"/>
        <input type="" placeholder="Email"/>
        <input type="" placeholder="senha"/>
        <Button 
        variant="contained" 
        size="medium"> Cadastrar</Button>
        </form>
      </div>
    );
  }
}

export default RegisterPage;
