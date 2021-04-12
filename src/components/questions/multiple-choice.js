import React, {useState} from 'react'

const MultipleChoice = ({question}) => {
    const [choice, setChoice] = useState("")
    const [graded, setGraded] = useState(false)
    const score = (q) => {
        if(graded && q === question.correct){
            return "list-group-item-success"
        } else if(graded && q !== question.correct) {
            return "list-group-item-danger"
        } else {
            return ""
        }
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
                        {
                            question.choices.map((choice) => {
                                return (
                                    <li className={`list-group-item ${score(choice)}`}>
                                        <label>
                                            <input type="radio"
                                                className="radio-button"
                                                name={question._id}
                                                onClick={() => setChoice(choice)}/>
                                                {choice}
                                        </label>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    You Answered: {choice}
                </span>
            </li>
            <div className="row">
                <div classNAme="col-4">
                    <button className="btn" onClick={() => setGraded(true)}>
                        Score
                    </button>
                </div>
            </div>
        </>
    )
}

export default MultipleChoice