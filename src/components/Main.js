require('normalize.css/normalize.css');
require('styles/App.scss');
require('./Header')

import React from 'react';
import Header from './Header';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <Header/>
        <img src={yeomanImage} alt="Yeoman Generator" />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
