import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux';
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import {useParams} from "react-router-dom";
import widgetService from '../../../services/widget-service';

const WidgetList = (
    {
        createWidgetForTopic,
        deleteWidget,
        updateWidget,
        findWidgetsForTopic,
        widgets,
        findAllWidgets
    }
) => {
    const {topicId} = useParams();
    useEffect(() => {
        findWidgetsForTopic(topicId)
    }, [topicId])

        
    return(
        <div>
            <i onClick={() => createWidgetForTopic(topicId)} className="fas fa-plus fa-2x float-right"></i>
            <h2>Widget List</h2>
            <ul className="list-group">
               {widgets.map(widget =>
                    <li 
                    className="list-group-item"
                    key={widget.id}>
                        {
                        widget.type === "HEADING" && <HeadingWidget widget={widget} updateWidget={updateWidget} deleteWidget={deleteWidget}/>
                        }
                        {
                        widget.type === "PARAGRAPH" && <ParagraphWidget widget={widget} updateWidget={updateWidget} deleteWidget={deleteWidget}/>
                        }
                    </li>
                )}
            </ul>
        </div>
    )
}

const stpm = (state) => ({
    widgets: state.widgetReducer.widgets
})
const dtpm = (dispatch) => ({
    findAllWidgets: () => {
        widgetService.findAllWidgets()
            .then(widgets => dispatch({
                type: "FIND_ALL_WIDGETS",
                widgets: widgets
            }))
    },
    findWidgetsForTopic: (topicId) => {
        console.log("FIND WIDGET FOR TOPIC: " + topicId)
        widgetService.findWidgetsForTopic(topicId)
        .then(widgets => dispatch({
            type: "FIND_WIDGETS_FOR_TOPIC",
            widgets
        }))
    },
    createWidgetForTopic: (topicId) => {
        console.log("CREATE WIDGET FOR TOPIC: " + topicId)
        widgetService.createWidgetForTopic(topicId)
        .then(widget => dispatch({
            type: "CREATE_WIDGET",
            widget
        }))
    },
    deleteWidget: (widgetId) =>
    widgetService.deleteWidget(widgetId) 
    .then(status => dispatch({
        type: "DELETE_WIDGET",
        widgetToDelete: widgetId
    })),

    updateWidget: (widgetId, widgetToUpdate) =>
    widgetService.updateWidget(widgetId, widgetToUpdate)
    .then(status => dispatch({
        type: "UPDATE_WIDGET", 
        widget: widgetToUpdate,
        wid: widgetId
    }))
})
export default connect(stpm, dtpm)(WidgetList);
