import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {connect} from 'react-redux';
import Question from '../questions/question'
import questionService from '../../services/question-service';

const Quiz = (
    {
        questions = [],
        findQuestionsForQuiz
    }
) => {
    const{quizId} = useParams()
    useEffect(() => {
        findQuestionsForQuiz(quizId)
    }, [])
    return (
        <div>
            <h2 className="quiz-header">
                Quiz {quizId}
            </h2>
            <ol className="quiz-list"> 
                {
                    questions.map((question =>
                        <Question question={question}/>
                    ))
                }
            </ol>
            <br/>
        </div>
    )
}

const stpm = (state) => {
    return {
        questions: state.questionReducer.questions
    }
}

const dtpm = (dispatch) => (
    {
        findQuestionsForQuiz: (quizId) => {
            questionService.findQuestionsForQuiz(quizId)
                .then(questions => dispatch({
                    type: 'FIND_QUESTIONS_FOR_QUIZ',
                    questions: questions
                }))
        }
    }
)

export default connect(stpm, dtpm)(Quiz)