import React, { } from 'react';
import './Slide.css';

const shadow = this.props;
const description = this.props;
const title = this.props;

const image = {
  backgroundImage: `url(${this.props.imgPath})`,
  width: '1000px',
  height: '385px',
  zoom: '0.8',
  margin: 'auto auto auto auto',
};

const bgColor = {
  background: `#${this.props.bgColor}`,
};

const textColor = {
  color: `#${this.props.txtColor}`,
};

const textShadow = {
  color: `#${this.props.txtColor}`,
  textShadow: '0 1px 4px rgba(0,0,0,0.25)',
};

const Slide = () => (
  <div className="slideContainer" style={bgColor}>
    <h1 style={shadow ? textShadow : textColor}>{title}</h1>
    <h2 style={textColor}>{description}</h2>
    <button type="button">Add DuckDuckGo to Chrome</button>
    <div className="slideImage" style={image} />
  </div>
);

export default Slide;
