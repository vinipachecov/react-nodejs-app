// SurveyNew shows survey form and surveyformReview
import React, { Component } from 'react';
import { connect } from 'react-redux';
import SurveyForm from './SurveyForm';

export class SurveyNew  extends Component {  

  render() {
    return (
      <div>
        <SurveyForm />
      </div>
    )
  };
};

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
};
export default connect(mapStateToProps, mapDispatchToProps)(SurveyNew);