import { TransitionGroup, Transition } from 'react-transition-group';
import React from 'react';

// import './style.scss';

export default class TwirlItem extends React.Component {
  constructor() {
    super();
    this.liRef = React.createRef();
  }

  componentDidUpdate() {}

  render() {
    return (
      <li
        style={{ width: 100, height: 100, backgroundColor: 'black' }}
        ref={this.liRef}
      >
        Hey, I am item number <b>{this.props.num}</b>
      </li>
    );
  }
}
