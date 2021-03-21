import React, {useState} from 'react'


const ParagraphWidget = ({widget, deleteWidget, updateWidget}) => {
    const [editing, setEditing] = useState(false)
    const [cachedWidget, setCachedWidget] = useState(widget)
    return(
        <>{
            editing && 
                <>
                    <i onClick={() => {
                        updateWidget(widget.id, cachedWidget) 
                        setEditing(false)
                    }} className="fas fa-check float-right"></i>
                    <i onClick={() => {
                        deleteWidget(widget.id);
                        setEditing(false)
                    }} className="fas fa-ban float-right"></i>
                    <textarea
                        className="form-control"
                        value={cachedWidget.text}
                        onChange={(event) => setCachedWidget({
                                ...cachedWidget,
                                text: event.target.value
                        })}
                    ></textarea>
                </>
        }
        {
            !editing &&
            <p>
                <i onClick={() => setEditing(true)}
                    className="fas fa-cog float-right"></i>
                    {cachedWidget.text}
            </p>
        }
        </>
    )
}

export default ParagraphWidget
