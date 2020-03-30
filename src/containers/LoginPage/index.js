import React, { Component } from "react";
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { routes } from '../Router'
import ButtonAppBar from "../../components/AppBar";


class LoginPage extends Component {
  render() {
    return (
      <div>
        <ButtonAppBar />
        <form>
        <input type="" placeholder="Email"/>
        <input type="" placeholder="senha"/>
        <button>Entrar</button>
        <button onClick={this.props.goToRegisterPage}>Cadastrar</button>
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
