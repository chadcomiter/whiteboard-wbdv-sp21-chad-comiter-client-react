import React from 'react'
import CourseTable from './course-table'
import CourseGrid from './course-grid'
import CourseEditor from './course-editor'
import { Route } from 'react-router'
import {Link} from 'react-router-dom'
import courseService from "../services/course-service"

class CourseManager extends React.Component {
    state = {
        courses: []
    }

    updateCourse = (course) => {
        console.log(course)
        courseService.updateCourse(course._id, course)
            .then(status => this.setState((prevState) => ({
              ...prevState,
              courses: prevState.courses.map(
                  (c) => c._id === course._id ? course : c)
            })))
      }

      componentDidMount = () =>
      courseService.findAllCourses()
          .then(courses => this.setState({courses}))

    addCourse = () => {

        const newCourse = {
            title: "New Course",
            owner: "New Owner",
            lastModified: "Never"
        }
        courseService.createCourse(newCourse).then(course => this.setState(
                (prevState) => ({
                    ...prevState,
                    courses: [
                        ...prevState.courses,
                        course
                    ]
                })
            ))
        
    }

    deleteCourse = (courseToDelete) => {
        courseService.deleteCourse(courseToDelete._id)
            .then(status => {
              this.setState((prevState) => ({
                  ...prevState,
                  courses: prevState.courses.filter
                    (course => course !== courseToDelete)
              }))
            })
      }

    render(){
        return (
            <div>
                <h1>Course Manager</h1>
                <button onClick={this.addCourse}>Add Course</button>
                <Route path="/courses/table">
                    <CourseTable 
                    deleteCourse={this.deleteCourse} 
                    courses={this.state.courses}
                    updateCourse={this.updateCourse}/>
                </Route>
                <Route path="/courses/grid">
                    <CourseGrid 
                    updateCourse={this.updateCourse}
                    deleteCourse={this.deleteCourse}
                    courses={this.state.courses}/>
                </Route>
                <Route path="/courses/editor" render={(props) => <CourseEditor props={props}/>}> 
                </Route>
                
            </div>
        )
    }
}

    
    


export default CourseManager