export const findAllQuizzes = () => {
    return fetch(`https://whiteboard-ccomiter-node.herokuapp.com/api/quizzes`)
        .then(response => response.json())
}

export const findQuizById = (quizId) => {
    return fetch(`https://whiteboard-ccomiter-node.herokuapp.com/api/quizzes/${quizId}`)
        .then(response => response.json())
}

export const submitQuiz = (quizId, questions) => 
    fetch(`https://whiteboard-ccomiter-node.herokuapp.com/api/quizzes/${quizId}/attempts`, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json'
        },
        body: JSON.stringify(questions)
    }).then(response => response.json())

const api = {
    findAllQuizzes,
    findQuizById,
    submitQuiz
}

export default api