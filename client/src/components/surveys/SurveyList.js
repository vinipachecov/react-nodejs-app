import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions'

export class SurveyList extends Component {  
  componentWillMount() {
    this.props.fetchSurveys();
  }  

  renderSurveys() {
    return this.props.surveys.reverse().map(survey => {
      return (
        <div className="card  darken-1" key={survey._id}>
          <div className="card-content">
            <span className="card-title">{survey.title}</span>
            <p>
              {survey.body}
            </p>
            <p className="right">
              Sent On: {new Date(survey.dataSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
            <a>Yes: {survey.yes}</a>
            <a>No: {survey.no}</a>
          </div>
        </div>
      );
    });
  }

  render() {
    console.log(this.props)
    return (
      <div>
        {this.renderSurveys()}       
      </div>
    )
  };
};

const mapStateToProps = (state) => ({
  surveys: state.surveys.surveys
})

const mapDispatchToProps = {
  fetchSurveys
};

export default connect(mapStateToProps, mapDispatchToProps)(SurveyList);
