import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "./editable-item";
import {useParams} from "react-router-dom";
import topicService from '../services/topic-service'

const TopicPills = (
    {
        topics = [],
        findTopicsForLesson,
        createTopic,
        deleteTopic,
        updateTopic
    }) => {
        const {courseId, moduleId, lessonId, topicId} = useParams();
        useEffect(() => {
            console.log("LOAD TOPICS FOR LESSON: " + lessonId)
            if(lessonId !== "undefined" && typeof lessonId !== "undefined"){
                findTopicsForLesson(lessonId)
            }
        }, [lessonId])
        return (
            <div>
                <h2>Topics</h2>
                <ul className="nav nav-pills">
                    {
                        topics.map(topic =>
                            <li className="nav-item">
                                <EditableItem
                                active={topic._id === topicId}
                                to={`/courses/editor/${courseId}/${moduleId}/${lessonId}/${topic._id}`}
                                deleteItem={deleteTopic}
                                updateItem={updateTopic}
                                item={topic}
                                />
                            </li>
                        )
                    }
                    <li>
                        <i onClick={() => createTopic(lessonId)} className="fas fa-plus"></i>
                    </li>
                </ul>
            </div>)}
const stpm = (state) => ({
    topics: state.topicReducer.topics
})

const dtpm = (dispatch) => ({
    createTopic: (lessonId) => {
        console.log("CREATE TOPIC FOR LESSON: " + lessonId)
        topicService
            .createTopic(lessonId, {title: "New Topic"})
            .then(topic => dispatch({
                type: "CREATE_TOPIC",
                topic
            }))
    },
    deleteTopic: (item) => 
        topicService.deleteTopic(item._id)
        .then(status => dispatch({
            type: "DELETE_TOPIC",
            topicToDelete: item
        })),
    updateTopic: (topic) => 
        topicService.updateTopic(topic._id, topic)
        .then(status => dispatch({
            type: "UPDATE_TOPIC",
            topicToUpdate: topic
        })),
    findTopicsForLesson: (lessonId) => {
        console.log("LOAD TOPICS FOR LESSON:")
        console.log(lessonId)
        topicService.findTopicsForLesson(lessonId)
            .then(topics => dispatch({
                type: "FIND_TOPICS",
                topics
            }))
    },
})

export default connect(stpm, dtpm)(TopicPills)