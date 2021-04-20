export const findAllQuizzes = () => {
    return fetch(`http://localhost:3200/api/quizzes`)
        .then(response => response.json())
}

export const findQuizById = (quizId) => {
    return fetch(`http://localhost:3200/api/quizzes/${quizId}`)
        .then(response => response.json())
}

export const submitQuiz = (quizId, questions) => 
    fetch(`http://localhost:3200/api/quizzes/${quizId}/attempts`, {
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