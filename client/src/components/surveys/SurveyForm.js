
import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import  SurveyField  from './SurveyField';

const FIELDS = [
  {label: 'Survey Title', name:'title'},
  {label: 'Survey Line', name:'subject'},
  {label: 'Email body', name:'body'},
  {label: 'Survey Recipient LIst', name:'emails'},
];

export class SurveyForm extends Component {  

  renderFields() {
    return _.map(FIELDS, ({label, name}) => {
      return (
        <Field key={name} component={SurveyField} type='text' label={label} name={name} />
      );
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}
        >
        { this.renderFields()}
        <Link to='/surveys' className='red btn-flat white-text'>
          Cancel
        </Link>
        <button type='submit' className='teal btn-flat right white-text'
        >
          Next
          <i className='material-icons right'>done</i>
        </button>
        </form>
      </div>
    )
  };
};

/**
 * Receives the object with the values of the form 
 * @param {*} values 
 */
function validate (values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'You must provide a title!';
  }
  
  return errors; 
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
};

export default reduxForm({
  validate,
  form: 'surveyForm'
})(SurveyForm)
