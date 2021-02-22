import React from "react";
import CourseRow from "./course-row";
import {Link} from 'react-router-dom'

export default class CourseTable extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h2>Course Table</h2>
        <Link to="/courses/grid">
                <i className="fas fa-2x fa-th float-right"></i>
        </Link>
        <table className="table">
          
          <tbody>
              
            {this.props.courses.map((course, ndx) => (
              <CourseRow
                deleteCourse={this.props.deleteCourse}
                updateCourse={this.props.updateCourse}
                course={course}
                key={ndx}
                title={course.title}
                owner={course.owner}
                lastModified={course.lastModified}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
