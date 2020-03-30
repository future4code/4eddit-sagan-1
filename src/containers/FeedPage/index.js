import React, { Component } from "react";
import ButtonAppBar from "../../components/AppBar";


class FeedPage extends Component {
  render() {
    return (
      <div>
        <ButtonAppBar />
        <form>
        <textarea type="" placeholder="Escreva seu Post"/>
        <button>Cadastrar</button>
        </form>
      </div>
    );
  }
}

export default FeedPage