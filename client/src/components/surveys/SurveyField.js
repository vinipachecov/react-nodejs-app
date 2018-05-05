// SurveyField contains the logic to render a single field

import React, { Component } from 'react';

export class SurveyField extends Component {  
  render() {
    const { meta, label, input } = this.props;
    const { error, touched } = meta;
    return (
      <div>
        <label>{label}</label>
        <input {...input} style={{ marginBottom: '5px'}} />
        <div className='red-text' style={{ marginBottom: '20px'}}>
          {touched && error}
        </div>        
      </div>
    )
  };
};


export default SurveyField;

