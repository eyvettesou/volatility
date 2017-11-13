import React from 'react';

class Home extends React.Component{
  state = {
    slide: 0,
  }

  onDisplay = (slide) => {
    var i;
    const totalSlides = document.getElementsByClassName('Home-slideshow-images');

    if (slide < 0) { slide = totalSlides.length - 1 }
    if (slide >= totalSlides.length) { slide = 0 }

    for (i = 0; i < totalSlides.length; i++) {
      totalSlides[i].style.display = 'none';
    };

    totalSlides[slide].style.display = 'block';
    this.setState({slide: slide});
  }

  nextDisplay = (nextSlide) => {
    this.onDisplay( this.state.slide + nextSlide );
  }

  componentDidMount() {
    this.onDisplay(this.state.slide);
  }

  render() {
    return(
      <div>
        <img className='Home-slideshow-images' src={require('./assets/images/001.jpeg')} alt='stupid warning 1' />
        <img className='Home-slideshow-images' src={require('./assets/images/002.jpeg')} alt='stupid warning 2' />
        <img className='Home-slideshow-images' src={require('./assets/images/003.jpeg')} alt='stupid warning 3' />
        <img className='Home-slideshow-images' src={require('./assets/images/004.jpeg')} alt='stupid warning 4' />
        <img className='Home-slideshow-images' src={require('./assets/images/005.jpeg')} alt='stupid warning 5' />
        <button
          className='w3-button w3-display-left w3-black'
          onClick={ () => { this.nextDisplay(-1) } }
          > &#10094; </button>
        <button
          className='w3-button w3-display-right w3-black'
          onClick={ () => { this.nextDisplay(1) } }
        > &#10095; </button>
      </div>
    )
  }
}

export default Home;
