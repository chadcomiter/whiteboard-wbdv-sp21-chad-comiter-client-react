import React from 'react';
import TrueFalse from './true-false';
import MultipleChoice from './multiple-choice'

const Question = ({question, addAns}) => {
    return (
        <>
            {
                question.type === 'TRUE_FALSE' && 
                <TrueFalse question={question} addAns={addAns}/>
            }
            {
                question.type == 'MULTIPLE_CHOICE' &&
                <MultipleChoice question={question} addAns={addAns}/>
            }
        </>
    )
}

export default Question
