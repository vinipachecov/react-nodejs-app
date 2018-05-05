// SurveyNew shows survey form and surveyformReview
import React, { Component } from 'react';
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

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
};
export default connect(mapStateToProps, mapDispatchToProps)(SurveyNew);