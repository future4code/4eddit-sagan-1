import React, { Component } from "react";
import ButtonStyle from '../../components/button'
import ButtonAppBar from '../../components/AppBar'
import Button from '@material-ui/core/Button';

class RegisterPage extends Component {
  render() {
    return (
      <div>
        <ButtonAppBar pageName='Registre-se' btnText='VOLTAR' />
        <form>
        <input type="" placeholder="Nome do usuário"/>
        <input type="" placeholder="Email"/>
        <input type="" placeholder="senha"/>
        <ButtonStyle btnText="Cadastrar"/>
        </form>
      </div>
    );
  }
}

export default RegisterPage;
