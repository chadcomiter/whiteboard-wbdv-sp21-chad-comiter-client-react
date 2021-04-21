import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {connect} from 'react-redux';
import Question from '../questions/question'
import questionService from '../../services/question-service';
import QuizService from '../../services/quiz-service';

const Quiz = (
    {
        questions = [],
        findQuestionsForQuiz,
        findAttemptsByQuizId
    }
) => {

    const{quizId} = useParams()
    const [completed, setCompleted] = useState(false);
    useEffect(() => {
        findQuestionsForQuiz(quizId)
        
    }, [])
    const answers = [];
    const addAns = (question, answer) => {
        const ans = {
            ...question,
            answer: answer
        }
        answers.push(ans);
    }
    return (
        <div>
            <h2 className="">
                Quiz {quizId}
            </h2>
            <ol className=""> 
                {
                    questions.map((question =>
                        <Question question={question} addAns={addAns}/>
                    ))
                }
            </ol>
            <br/>
            <div className="row">
                <div className="col-4">
                    <button className="btn"
                        onClick={() => {
                            QuizService.submitQuiz(quizId, answers);
                            setCompleted(true)
                        }}
                    >Submit</button>
                </div>
            </div>
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