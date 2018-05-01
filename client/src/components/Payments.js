import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import { handleToken } from '../actions';

export class Payments extends Component {

  render() {    

    return (
      <StripeCheckout      
        name="Emaily"
        description="$5 for 5 email survey credits."
        amount={500}
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >     
      <button className="btn" style={{ backgroundColor: '#303f9f'}}>
        Add Credits
      </button>
      </StripeCheckout>
    )
  };
};

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  handleToken
};

export default connect(mapStateToProps, mapDispatchToProps)(Payments);