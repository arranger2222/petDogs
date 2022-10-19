import { Component } from 'react';
import { fetchBreeds, fetchDogByBreed } from 'api';
import { Dog } from './Dog';
import { BreedSelect } from './BreedSelect';

export class App extends Component {
  state = {
    breeds: [],
    dog: null,
    error: null,
  };

  async componentDidMount() {
    try {
      const breeds = await fetchBreeds();
      this.setState({ breeds: breeds });
    } catch (error) {
      this.setState({ error: "Ups, we can't find your dog:(" });
    }
  }

  selectBreed = async bredId => {
    try {
      const dog = await fetchDogByBreed(bredId);
      this.setState({ dog });
    } catch (error) {
      this.setState({ error: "Ups, we can't find your dog:(" });
    }
  };

  render() {
    const { dog, error, breeds } = this.state;

    return (
      <>
        <BreedSelect breeds={breeds} onSelect={this.selectBreed} />
        {error && <div>{error}</div>}
        {dog && <Dog dog={dog} />}
      </>
    );
  }
}
