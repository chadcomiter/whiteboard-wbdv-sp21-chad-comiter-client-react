export const findAllQuizzes = () => {
    return fetch(`http://localhost:3200/api/quizzes`)
        .then(response => response.json())
}

export const findQuizById = (quizId) => {
    return fetch(`http://localhost:3200/api/quizzes/${quizId}`)
        .then(response => response.json())
}

const api = {
    findAllQuizzes,
    findQuizById
}

export default api