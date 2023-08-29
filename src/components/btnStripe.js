import React from 'react';

const BtnStripePay = (props) => {
  const {buyButtonId, publishableKey, clientReferenceId, customerEmail} = props;
  
  return (
      <div id="btn-light">
        <stripe-buy-button
            buy-button-id={buyButtonId}
            publishable-key={publishableKey}
            client-reference-id={clientReferenceId}
            customer-email={customerEmail}
        >
        </stripe-buy-button>
      </div>
  );
};

export default BtnStripePay;