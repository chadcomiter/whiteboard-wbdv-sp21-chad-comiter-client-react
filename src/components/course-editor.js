import React, {useState} from 'react'
import {Link, useParams} from "react-router-dom";
import moduleReducer from "../reducers/modules-reducer";
import lessonReducer from "../reducers/lesson-reducer";
import topicReducer from "../reducers/topic-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import TopicPills from "./topic-pills";
import WidgetList from './course-editor/widgets/widget-list';
import widgetReducer from '../reducers/widget-reducer';


const CourseEditor = ({history}) => {
    const {courseId, moduleId, topicId, lessonId, layout} = useParams();
    return (
        <div>
            <h2>
                <Link to={`/courses/${layout}`}>
                    <i className="fas fa-arrow-left"></i>
                </Link>
                Course Editor
            </h2>
            <div className="row">
                <div className="col-4">
                    <ModuleList/>
                </div>
                <div className="col-8">
                    <LessonTabs/>
                    <TopicPills/>
                    <br/>
                    <WidgetList/>
                </div>
            </div>
        </div>
    )}

export default CourseEditor