import React from 'react';
import _ from 'lodash';
import Button from './Button';

const FaqItem = (q) => {
    return (
        <div>
            <h6>{q.q.question}</h6>
            <p>{q.q.answer}</p>
        </div>
    )
}

const FAQ = ({ faq, faqButtons }) => {
    const faqArray = _.values(faq);
    const faqButtonsArray = _.values(faqButtons);
    return (
        <div className="col-md-4 pushdown">

            {faqArray.map((q, index) => {
                return <FaqItem q={q} key={index} />
            })}

            <div className="pushdown">
                {
                    faqButtonsArray.map((button, index) => {
                        return (
                            <Button text={button.text} url={button.url} key={index} />
                        )
                    })
                }
            </div>

        </div>
    )
}

export default FAQ; 
