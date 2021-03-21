export const createWidgetForTopic = (topicId) => 

    fetch(`http://localhost:8080/api/topics/${topicId}/widgets`, {
        method: "POST",
        body: JSON.stringify({type: "HEADING", size: 1, text: "New Widget"}),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
        /*
        .then(actualWidget => {
            setWidgets(widgets => ([...widgets, actualWidget]))
        })
        */
export const findAllWidgets = () =>
    fetch(`http://localhost:8080/api/widgets`)
        .then(response => response.json())

export const findWidgetsForTopic = (topicId) => 
    fetch(`http://localhost:8080/api/topics/${topicId}/widgets`)
        .then(response => response.json())
        
export const deleteWidget = (wid) =>
    fetch(`http://localhost:8080/api/widgets/${wid}`, {
        method: "DELETE",
    })
        .then(response => response.json())/*{
        setWidgets((widgets) => widgets.filter(w => w.id !== wid))
    })*/
export const updateWidget = (wid, widget) =>
    fetch(`http://localhost:8080/api/widgets/${wid}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
        /*{
        setWidgets((widgets) => widgets.map(w => w.id !== wid ? w : widget))
        setEditingWidget({})
    })*/

export default {
        createWidgetForTopic, deleteWidget, updateWidget, findWidgetsForTopic, findAllWidgets
}