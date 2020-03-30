import React, { Component } from "react";
import ButtonStyle from '../../components/button'

class RegisterPage extends Component {
  render() {
    return (
      <div>
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
