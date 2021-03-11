import React, {useState} from 'react'
import { Link } from 'react-router-dom'



const CourseCard = (
    {
        deleteCourse,
        updateCourse,
        course
    }) => {
    const [editing, setEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(course.title)

    const saveTitle = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: newTitle
        }
        updateCourse(newCourse)
    }
    return (
    <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-12">
        <div className="card">
            <div className="card-body"> 
                <h5 className="card-title">
                    {
                    !editing &&
                    <Link to={`/courses/table/editor/${course._id}`}>
                        {course.title}
                    </Link>
                    }
                    {
                    editing &&
                    <input
                        onChange={(event) => setNewTitle(event.target.value)}
                        value={newTitle}
                        className="form-control"/>
                    }
                </h5>
                <p className="card-text">Owner: {course.owner}<br></br> Last Modifed: {course.lastModified}</p>
                <img src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png" className="card-img-top" alt="..."/>
                <Link to="/courses/editor" className="btn btn-primary">{course.title}</Link>
                {!editing && <i onClick={() => setEditing(true)} className="fas fa-edit fa-2x float-right"></i>}
                {editing && <i onClick={() => saveTitle()} className="fas fa-check fa-2x float-right"></i>}
                <i onClick={() => deleteCourse(course)} className="fas fa-trash fa-2x float-right"></i>
            </div>
        </div>
    </div>
    )
}
export default CourseCard