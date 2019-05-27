import React, { Component } from 'react';

import Gallery from './Gallery';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {pokemon: {}, id: 1}
    }

    componentDidMount() {

        fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.id}`).then(response => {
            return response.json();
          })
          .then(json => {
            const result = json;
            this.setState({pokemon: result})
          });


    }

    increment = () => {

      this.setState({id: this.state.id + 1})

    }

    render() {


        return (
            <div>Pokemon
                <Gallery pokemon={this.state.pokemon} id={this.state.id}/>
                  <button onClick={this.increment}>next</button>

            </div>

        )

    }

}

export default App;
