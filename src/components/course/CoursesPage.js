import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import {bindActionCreators} from 'redux';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';
class CoursesPage extends Component {

  constructor(props, context) {
    super(props, context);
    this.courseRow = this.courseRow.bind(this);
    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
  }


  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }
  redirectToAddCoursePage() {
    browserHistory.push('/course');
  }
  render() {
    const {courses} = this.props;
    return (
      <div>
        <h1>Courses</h1>
        <input type="button" value="Add Course" className="btn btn-primary" onClick={this.redirectToAddCoursePage}/>
        <CourseList courses={courses}/>
      </div>
    );
  }


}
//validations
CoursesPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
  //createCourse: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {

  return {
    courses: state.courses //courses because that's the shorthand form in the root reducer for the courseReducer
  };
}
function mapDispatchToProps(dispatch) {
  return {
    // createCourse:(course) => dispatch(courseActions.createCourse(course))
    actions: bindActionCreators(courseActions, dispatch)
  };
}

//mapDispatchToProps -- optional
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
