const initialState = {
    topics: []
}

const topicReducer = (state=initialState, action) => {
    switch (action.type){
        case "CREATE_TOPIC":
            return{
                ...state,
                topics: [
                    ...state.topics,
                    action.topic
                ]
            }
        case "DELETE_TOPIC":
            const newState1 = {
                topics: state.topics.filter(topic => {
                    if(topic._id == action.topicToDelete._id){
                        return false
                    } else {
                        return true
                    }
                })
            }
            return newState1
        case "UPDATE_TOPIC":
            return {
                topics: state.topics.map(topic => {
                    if(topic._id === action.topicToUpdate._id){
                        return action.topicToUpdate
                    } else {
                        return topic
                    }
                })
            }
        case "FIND_TOPICS":
            return {
                ...state,
                topics: action.topics
            }
        default:
            return state
    }
}

export default topicReducer