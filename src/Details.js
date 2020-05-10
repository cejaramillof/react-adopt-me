import React from 'react';
import pet from '@frontendmasters/pet';
import Carousel from './Carousel';
import ErrorBoundary from './ErrorBoundary';

/*
const Details = (props) => {
  return (
    <div>
      <pre><code>{JSON.stringify(props, null, 4)}</code></pre>
    </div>)
}
*/

class Details extends React.Component {
  /*
  constructor(props) {
    super(props); // call constructor of parent class, to send props

    // Object.assign(oldState, newState)

    this.state = {
      someOtherThing: 'lol',
      loading: true,
    }
  }
  */

  // is the same but with plugin-proposal-class-properties
  state = { loading: true } // initialize state

  componentDidMount() {
    // throw new Error('lol');
    pet.animal(this.props.id)
      .then(({ animal }) => {
        this.setState({
          name: animal.name,
          animal: animal.type,
          location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
          description: animal.description,
          media: animal.photos,
          breed: animal.breeds.primary,
          loading: false,
        })
      }, console.error)
  }

  render() {
    if (this.state.loading) {
      return <h1>loading..</h1>
    }

    const { animal, breed, location, description, name, media } = this.state;
    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    )
  }
}

// export default Details;

//HoC
export default function DetailsWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  )

}