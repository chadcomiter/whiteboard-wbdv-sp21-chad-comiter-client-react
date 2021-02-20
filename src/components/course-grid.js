import React from 'react'
import CourseCard from './course-card'
import {Link} from 'react-router-dom'
import courseService from '../services/course-service'


const CourseGrid = ({
    courses,
    deleteCourse,
    updateCourse

    }) => {
    return (
    <div>
        <Link to="/courses/table">
            <i className="fas fa-list fa-2x float-right"></i>
        </Link>
        <h2>Course Grid</h2>
        <div className="row">
        {
          courses.map(course  =>
                <CourseCard 
                course={course}
                title={course.title}
                owner={course.owner}
                lastModified={course.lastModified}
                deleteCourse={deleteCourse}
                updateCourse={updateCourse}
                />
        )
    }
        </div>
    </div>
    ) 
}





export default CourseGrid