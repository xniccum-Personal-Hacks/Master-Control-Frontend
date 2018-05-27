require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import Header from './header';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <Header/>
        <img className="yeoman" src={yeomanImage}/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
