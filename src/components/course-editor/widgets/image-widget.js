import React, {useState} from 'react'

const ImageWidget =({widget, updateWidget, deleteWidget}) => {
    const [cachedWidget, setCachedWidget] = useState(widget)
    const [editing, setEditing] = useState(false)
    return(
        <>
            {
                editing &&
                <>
                    <i onClick={() => {updateWidget(widget.id, cachedWidget)
                        setEditing(false)
                    }} className="fas fa-check float-right"></i>
                    <i onClick={() => {
                        deleteWidget(widget.id)
                        setEditing(false)
                    }} className="fas fa-trash float-right"></i>
                    <>
                    <label htmlFor="source-input">URL</label>
                    <select value={cachedWidget.type}
                        onChange={(event) =>
                            setCachedWidget({
                                ...cachedWidget,
                                type: event.target.value
                            })} className="form-control">
                        <option value={"PARAGRAPH"}>PARAGRAPH</option>
                        <option value={"HEADING"}>HEADING</option>
                        <option value={"LIST"}>LIST</option>
                        <option value={"IMAGE"}>IMAGE</option>
                    </select>
                    <label htmlFor="width-input">Width</label>
                    <input 
                        id="width-input"
                        value={cachedWidget.width}
                        className="form-control"
                        onChange={(e) =>
                            setCachedWidget({
                                ...cachedWidget,
                                width: e.target.value
                    })}/>
                    <label htmlFor="height-input">Height</label>
                    <input
                        id="height-input"
                        value={cachedWidget.height}
                        className="form-control"
                        onChange={(e) => setCachedWidget({
                            ...cachedWidget,
                            height: e.target.value
                    })}/>
                    </>
                </>
            }
            {
                !editing && 
                <>
                    <i onClick={() => setEditing(true)} className="fas fa-edit float-right"></i>
                    <img width={cachedWidget.width} height={cachedWidget.height} src={cachedWidget.src}/>
                </>
            }
        </>
    )
}
export default ImageWidget