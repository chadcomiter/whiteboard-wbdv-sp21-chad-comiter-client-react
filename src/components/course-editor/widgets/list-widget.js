import React, { useState } from 'react';

const ListWidget = ({ widget, updateWidget, deleteWidget} ) => {
    const [cachedWidget, setCachedWidget] = useState(widget)
    const [editing, setEditing] = useState(false)
    return (
        <>
            {
                editing && 
                <>
                    <i onClick={() => {
                        updateWidget(widget.id, cachedWidget)
                        setEditing(false)
                    }} className="fas fa-check float-right"></i>
                    <i onClick={() => {
                        deleteWidget(widget.id)
                        setEditing(false)
                    }} className="fas fa-b thean float-right"></i>
                    <input type="checkbox" checked={cachedWidget.ordered}
                        onChange={(e) => setCachedWidget({...cachedWidget, ordered: e.target.checked})}/> Check To Order
                    <textarea
                        value={cachedWidget.text} className="form-control"
                        rows="5"
                        onChange={(e) => 
                            setCachedWidget({
                                ...cachedWidget, ordered: e.target.checked
                            })}>
                    </textarea>
                </>
            }
            {
                !editing && 
                <>
                    <i onClick={() => setEditing(true)} className="fas fa-edit float-right"></i>
                    {
                        cachedWidget.ordered && 
                            <ol>
                                {cachedWidget.text.split("\n").map((component) => {
                                    return (
                                        <li>
                                            component
                                        </li>
                                    )
                                })}
                            </ol>
                    }
                    {
                        !widget.ordered && 
                        <ul>
                            {cachedWidget.text.split("\n").map((component) => {
                                return (
                                    <li>
                                        {component}
                                    </li>
                                )
                            })}
                        </ul>
                    }
                </>
            }
        </>
    )
}
export default ListWidget