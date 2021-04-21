export const findQuestionsForQuiz = (quizId) => 
    fetch(`https://whiteboard-ccomiter-node.herokuapp.com/api/quizzes/${quizId}/questions`)
        .then(response => response.json())

const api = {
    findQuestionsForQuiz
}

export default api