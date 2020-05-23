import React from 'react';
import { Photo } from '@frontendmasters/pet';

interface IProps {
  media: Photo[]
}

interface IState {
  active: number;
  photos: string[];
}

class Carousel extends React.Component<IProps, IState> {
  public state = {
    active: 0,
    photos: [],
  };

  /*
  constructor(props) {
    super(props);
    this.handleIndexClick = this.handleIndexClick.bind(this)
  }
  handleIndexClick (event) {}
  // But is best way use arrow function
  */

  public static getDerivedStateFromProps({ media }: IProps) {
    let photos = ['http://placecorgi.com/600/600'];
    if (media.length) {
      photos = media.map(({ large }) => large)
    }
    return { photos };
  }

  // this is best way to skip bind this
  public handleIndexClick = (event: React.MouseEvent<HTMLElement>) => {
    if (!(event.target instanceof HTMLElement)) {
      return;
    }
    if (event.target.dataset.index) {
      this.setState({
        active: +event.target.dataset.index // +string is the same at parseInt()
      });
    };
  };

  public render() {
    const { photos, active } = this.state;
    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {/*
          withouth getDerivedStateFromProps, will use photos.media.map, an in each photo.large
          But with getDerivedStateFromProps you abstract out some of the logic in this kind of handler,
         */}
          {photos.map((photo, index) => (
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events
            <img
              key={photo}
              src={photo}
              data-index={index}
              alt="animal thumbnail"
              className={index === active ? 'active' : ''}
              onClick={this.handleIndexClick}
            // onClick={this.handleIndexClick.bind(this,index)} // can use too this form, and get index for props on handleIndexClick
            // but use .bind is very expensive, and in each render will go call bind
            />
          ))}
        </div>
      </div>
    )
  }
}

export default Carousel;