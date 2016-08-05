import React, {PropTypes,Component} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import {bindActionCreators} from 'redux';

class CoursesPage extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      course: {title: ''},
      courses:[]
    };

    this.onClickSave = this.onClickSave.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.courseRow = this.courseRow.bind(this);
  }

  onTitleChange(event) { //inherits this from the event
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course: course});
  }

  onClickSave(event) {
  //  this.props.dispatch(courseActions.createCourse(this.state.course));
    this.props.actions.createCourse(this.state.course);
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
        <h2>Add course</h2>
        <input type="text"
               onChange={this.onTitleChange}
               value={this.state.course.title}/>
        <input type="submit" value="Save" onClick={this.onClickSave}/>
      </div>
    );
  }
}
//validations
CoursesPage.propTypes = {
 // dispatch: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired,
  actions:PropTypes.object.isRequired
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
   actions: bindActionCreators(courseActions,dispatch)
  };
}

//mapDispatchToProps -- optional
export default connect(mapStateToProps,mapDispatchToProps)(CoursesPage);
