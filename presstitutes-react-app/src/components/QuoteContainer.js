import React from 'react';

const QuoteContainer = ({ quote, quotename }) =>{
    return (
    <div className="quote-container">
        <p className="quote">{quote}</p>
        <p className="quotename">{quotename}</p>
    </div>
    );
}

export default QuoteContainer;
