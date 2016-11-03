require('normalize.css/normalize.css');
require('styles/App.css');

let imageDatas = require('../data/imageDatas.json');

import React from 'react';

imageDatas = (imageDatasArr => {
	for(let i=0, j=imageDatasArr.length; i < j; i++){
		let singleImageData = imageDatasArr[i];
		singleImageData.imageUrl = require('../images/' + singleImageData.fileName);
		imageDatasArr[i] = singleImageData;
	}
	return imageDatasArr;
})(imageDatas);

class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
      	<section className="img-sec">
      	</section>
      	<nav className="controller-nav">
      	</nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
