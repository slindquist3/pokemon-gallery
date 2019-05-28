import React from 'react';
import { connect } from 'react-redux';
import { fetchFeatured } from '../actions'

class FeaturedPokemon extends React.Component {

    componentDidMount() {

        this.props.fetchFeatured()
    }

    render() {

        if (!this.props.featured) {
            return <div>Loading...</div>
        } else {

            return (
                <div>
                    <h1>{this.props.featured.name}</h1>
                    <img src="https://pokeres.bastionbot.org/images/pokemon/1.png" alt="pokemon"/>
                </div>
            )

        }

    }

}

const mapStateToProps = (state) => {

    return {featured: state.featured}
}

export default connect(mapStateToProps, {fetchFeatured} )(FeaturedPokemon);
