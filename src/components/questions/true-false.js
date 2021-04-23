import React, {useState} from 'react'

const TrueFalse = ({question, addAns}) => {
    const [choice, setChoice] = useState("")
    const [graded, setGraded] = useState(false)
    const score = (q) => {
        if(graded && q === question.correct){
            return "list-group-item-success"
        } else if (graded && q === question.correct){
            return "list-group-item-danger"
        }
        return ""
    }
    return (
        <>
            <li>
                <h3>
                    {question.question}
                    {
                        question.correct === choice && graded && <i className="fas fa-check float-right"></i>
                    }
                    {
                        question.correct !== choice && graded && <i className="fas fa-times float-right"></i>
                    }
                </h3>
                <span className="body-text">
                    <ul className="list-group">
                        <li className={`list-group-item ${score("true")}`}>
                            <label>
                                <input type="radio"
                                    className="radio-button"
                                    name={question._id}
                                    onClick={() => setChoice("true")}/>
                                True
                            </label>
                        </li>
                        <li className={`list-group-item ${score("false")}`}>
                            <label>
                                <input type="radio"
                                    className="radio-button"
                                    name={question._id}
                                    onClick={() => setChoice("false")}/>
                                False
                            </label>
                        </li>
                    </ul>
                    You Answered: {choice}
                </span>
            </li>
            <div className="row">
                <div className="col-4">
                    <button className="btn"
                        onClick={() => {
                            setGraded(true);
                            addAns(question, choice);
                            }}>
                            Score
                    </button>
                </div>
            </div>
        </>
    )
}

export default TrueFalse