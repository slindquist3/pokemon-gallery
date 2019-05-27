import React, { Component } from 'react';

import Gallery from './Gallery';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {pokemon: {}, position: 1}
    }

    componentDidMount() {

        fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.position}`).then(response => {
            return response.json();
          })
          .then(json => {
            const result = json;
            this.setState({pokemon: result})
            console.log(this.state.pokemon)
          });

          
    }

    render() {

        return (
            <div>Pokemon
                <Gallery pokemon={this.state.pokemon}/>
            </div>
        )

    }

}

export default App;