import React, {useState} from 'react'

const HeadingWidget = ({widget, deleteWidget, updateWidget}) => {
    const [editing, setEditing] = useState(false)
    const [cachedWidget, setCachedWidget] = useState(widget)
    return(
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
                       }} className="fas fa-ban float-right"></i>
                    <select value={cachedWidget.type}
                        onChange={(event) =>
                            setCachedWidget({
                                ...cachedWidget,
                                type: event.target.value
                            })} className="form-control">
                        <option value={"PARAGRAPH"}>PARAGRAPH</option>
                        <option value={"HEADING"}>HEADING</option>
                    </select>
                    <input value={cachedWidget.text}
                       onChange={(event) => 
                        setCachedWidget({
                            ...cachedWidget,
                            text: event.target.value
                        })} className="form-control"></input>
                    <select value={cachedWidget.size}
                        onChange={(event) => 
                         setCachedWidget({
                            ...cachedWidget,
                             size: event.target.value
                        })} className="form-control">
                        <option value={1}>Heading 1</option>
                        <option value={2}>Heading 2</option>
                        <option value={3}>Heading 3</option>
                        <option value={4}>Heading 4</option>
                        <option value={5}>Heading 5</option>
                        <option value={6}>Heading 6</option>
                    </select>
                </>
            }
            {
                !editing &&
                    <div>
                        <i onClick={() => setEditing(true)}
                            className="fas fa-cog float-right"></i>
                        {widget.size === 1 && <h1>{widget.text}</h1>}
                        {widget.size === 2 && <h2>{widget.text}</h2>}
                        {widget.size === 3 && <h3>{widget.text}</h3>}
                        {widget.size === 4 && <h4>{widget.text}</h4>}
                        {widget.size === 5 && <h5>{widget.text}</h5>}
                        {widget.size === 6 && <h6>{widget.text}</h6>}
                    </div>
            }
        </>
    )
}

export default HeadingWidget