import React, { Component } from "react";
import ButtonAppBar from '../../components/AppBar'



class RegisterPage extends Component {
  render() {
    return (
      <div>
        <ButtonAppBar pageName='Registre-se' btnText='VOLTAR' />
        <form>
        <input type="" placeholder="Nome do usuário"/>
        <input type="" placeholder="Email"/>
        <input type="" placeholder="senha"/>
        <button>Cadastrar</button>
        </form>
      </div>
    );
  }
}

export default RegisterPage;
