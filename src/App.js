import React, { Component } from 'react';
import ListaDeNotas from './components/ListaDeNotas/';
import FormularioCadastro from './components/FormularioCadastro/';
import "./assets/App.css";
import "./assets/index.css";
import ListaDeCategorias from './components/ListaDeCategorias';

class App extends Component {

  constructor() {
    super();
    this.state = {
      notas: [],
      categorias:["Games", "Música"],
    }
  }

  criarNota(titulo, texto, categoria) {
    const novaNota = { titulo, texto, categoria };
    const novoArrayDeNotas = [...this.state.notas, novaNota]
    const novoEstado = {
      notas: novoArrayDeNotas
    }
    this.setState(novoEstado);
  }

  adicionarCategoria(nomeCategoria) {
    const novoArrayDeCategorias = [...this.state.categorias, nomeCategoria]
    const novoEstado = {...this.state, categorias:novoArrayDeCategorias};
    this.setState(novoEstado);
  }

  deletarNota(index) {
    console.log(index);
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index, 1);
    this.setState({ notas: arrayNotas })
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro
          categorias={this.state.categorias} 
          criarNota={this.criarNota.bind(this)} />
        <main className="conteudo-principal">
          <ListaDeCategorias
          adicionarCategoria={this.adicionarCategoria.bind(this)} 
          categorias={this.state.categorias} />
          <ListaDeNotas notas={this.state.notas} apagarNota={this.deletarNota.bind(this)} />
        </main>
      </section>
    );
  }

}

export default App;
