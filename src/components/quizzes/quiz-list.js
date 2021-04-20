import React, {useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import quizService from '../../services/quiz-service';
import {connect} from 'react-redux';

const QuizList = (
    {
        quizzes = [],
        findAllQuizzes,
    }
) => {
    useEffect(() => {
        findAllQuizzes()
    }, [findAllQuizzes])
    const {courseId} = useParams()
    return (
        <div>
            <h2 className="">
                Quizzes
            </h2>
            <br/>
            <ul className="list-group">
                {
                    quizzes.map((quiz => {
                        return (
                            <li className="list-group-item">
                                {quiz.title}
                                <Link to={`/courses/${courseId}/quizzes/${quiz._id}`}>
                                    <button className="btn float-right">
                                        Start
                                    </button>
                                </Link>
                            </li>
                        )
                    }))
                }
            </ul>
            <br/>
        </div>
    )
}

const stpm = (state) => {
    return {
        quizzes: state.quizReducer.quizzes
    }
}

const dtpm = (dispatch) => (
    {
        findAllQuizzes: () => {
            quizService.findAllQuizzes()
                .then(quizzes => dispatch({
                    type: 'FIND_ALL_QUIZZES',
                    quizzes: quizzes
                }))
        }
    }
)

export default connect(stpm, dtpm)(QuizList)