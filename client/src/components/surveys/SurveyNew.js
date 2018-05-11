// SurveyNew shows survey form and surveyformReview
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './surveyFormReview';


export class SurveyNew  extends Component {  
  state = { surveyFormReview: false}

  renderContent() {
    if (this.state.showFormReview) {
      return <SurveyFormReview
        onCancel={() => this.setState({ showFormReview: false})} />;
    }

    return (
      <SurveyForm
        onSurveySubmit={
          () => this.setState({ showFormReview: true })
        } 
      />
    );
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    )
  };
};

export default reduxForm({
  form: 'surveyForm'
})(SurveyNew);