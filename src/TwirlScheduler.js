import { TransitionGroup, Transition } from 'react-transition-group';
import React from 'react';
import anime from 'animejs';

import logo from './logo.svg';
import TwirlItem from './TwirlItem';

function createSplashTimeline() {
  return anime
    .timeline({ loop: true })
    .add({
      targets: '#splash',
      scale: {
        value: 0.5,
        duration: 700,
        easing: 'easeInOutQuart',
      },
    })
    .add({
      targets: '#splash',
      scale: {
        value: 1,
        duration: 700,
        easing: 'easeInOutQuart',
      },
    });
}

var twirlTimeline = anime.timeline({
  direction: 'alternate',
  autoplay: false,
  loop: false,
});

export default class TwirlScheduler extends React.Component {
  constructor() {
    super();
    this.state = {
      animationState: 0,
    };

    this.splashScreenRef = React.createRef();
  }
  componentDidMount() {
    if (this.state.animationState === 0) {
      const timeline = createSplashTimeline();
      setTimeout(() => {
        timeline.pause();
        this.setState({
          animationState: this.state.animationState++,
        });
      }, 3000);
    }
  }

  _renderSplashScreen() {
    return (
      <img
        id="splash"
        ref={this.splashScreenRef}
        src={logo}
        className="App-logo"
        alt="logo"
      />
    );
  }
  render() {
    if (this.state.animationState === 0) {
      return this._renderSplashScreen();
    }
    return (
      <div className="app-container">
        <TwirlItem />
      </div>
    );
  }
}
