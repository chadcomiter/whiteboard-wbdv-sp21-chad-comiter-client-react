export const findQuestionsForQuiz = (quizId) => 
    fetch(`http://localhost:3200/api/quizzes/${quizId}/questions`)
        .then(response => response.json())

const api = {
    findQuestionsForQuiz
}

export default api