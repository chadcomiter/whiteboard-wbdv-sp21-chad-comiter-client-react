import React from 'react';
import TrueFalse from './true-false';
import MultipleChoice from './multiple-choice'

const Question = ({question}) => {
    return (
        <>
            {
                question.type === 'TRUE_FALSE' && 
                <TrueFalse question={question}/>
            }
            {
                question.type == 'MULTIPLE_CHOICE' &&
                <MultipleChoice question={question}/>
            }
        </>
    )
}

export default Question
