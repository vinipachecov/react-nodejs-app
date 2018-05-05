// SurveyField contains the logic to render a single field

import React, { Component } from 'react';
import { connect } from 'react-redux';

export class SurveyField extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { meta, label, input } = this.props;
    const { error, touched } = meta;
    return (
      <div>
        <label>{label}</label>
        <input {...input}  />
        {touched && error}
      </div>
    )
  };
};


export default SurveyField;

