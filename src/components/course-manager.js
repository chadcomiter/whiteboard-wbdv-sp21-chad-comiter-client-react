import React from 'react'
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import CourseEditor from "./course-editor";
import {Link, Route, useParams} from "react-router-dom";
import courseService, {findAllCourses, deleteCourse} from "../services/course-service";


class CourseManager extends React.Component {
  state = {
    courses: [],
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

    findAllCourses()
        .then(courses => this.setState({courses}))

  addCourse = () => {
    const newCourse = {
      title: "New Course",
      owner: "New Owner",
      lastModified: "Never"
    }
    courseService.createCourse(newCourse)
        .then(course => this.setState(
            (prevState) => ({
              ...prevState,
              courses: [
                  ...prevState.courses,
                  course
              ]
            })))

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

  
  
  render() {
    return(
      <div>
        <h1>Course Manager</h1>
        <button onClick={this.addCourse}>Add Course</button>
        <Route path="/courses/table"
        exact={true}>
          <CourseTable
              updateCourse={this.updateCourse}
              deleteCourse={this.deleteCourse}
              courses={this.state.courses}
              layout={'table'}
              />
        </Route>
        <Route path="/courses/grid" 
        exact={true}>
          <CourseGrid
              deleteCourse={this.deleteCourse}
              updateCourse={this.updateCourse}
              courses={this.state.courses}
              layout={"grid"}/>
        </Route>
        <Route path={[
              "/courses/:layout/editor/:courseId",
              "/courses/:layout/editor/:courseId/modules/:moduleId",
              "/courses/:layout/editor/:courseId/modules/:moduleId/lessons/:lessonId",
              "/courses/:layout/editor/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId",]}
                 exact={true}
                 render={(props) => <CourseEditor {...props}/>}>
        </Route>
      </div>
    )
  }
}

export default CourseManager