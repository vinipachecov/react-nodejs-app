import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class Landing extends Component {  

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>
          Emaily!!
        </h1>
        Collect email feedback from your users!
      </div>
    )
  };
};

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing)
