import React from 'react';

const FAQPage = (props) => {
    const { faq } = props;
  return (
    <div className="faq-page">
      <h1 className="faq-page-name">InstaSite FAQ</h1>
      {faq.map(el => { 
        return <div className="faq-item">
            <h2>{el.question}</h2>
            {el.answer.map(ans => <p>{ans}</p>)}
          </div>
      })}
    </div>
  );
}

export default FAQPage;
