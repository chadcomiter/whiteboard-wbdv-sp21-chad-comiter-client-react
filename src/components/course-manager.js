import React from 'react'
import CourseTable from './course-table'
import CourseGrid from './course-grid'
import CourseEditor from './course-editor'
import CourseForm from './course-form'

class CourseManager extends React.Component {
    state = {
        courses: [
            { title: "CS5610", owner: "alice", lastModified: "1/1/2021" },
            { title: "CS5008", owner: "bob", lastModified: "1/2/2021" },
          ]
    }

    addCourse = () => {
        const newCourse = {
            title: "New Course",
            owner: "New Owner",
            lastModified: "Never"
        }
        this.state.courses.push(newCourse);
        this.setState(this.state)
    }

    deleteCourse = (deletedCourse) => {
        //console.log(course)
        const newCourses = this.state.courses.filter(course => course != deletedCourse)
        this.setState(this.state.courses = newCourses)
    }

    render(){
        return (
            <div>
                <h1>Course Manager</h1>
                <CourseForm/>
                <button onClick={this.addCourse}>Add Course</button>
                <CourseTable deleteCourse={this.deleteCourse} courses={this.state.courses}/>
                <CourseGrid deleteCourse={this.deleteCourse} courses={this.state.courses}/>
                <CourseEditor/> 
            </div>
        )
    }
}

    
    


export default CourseManager