import expect from 'expect';
import * as actions from '../actions/courseActions';
import courseReducer from './courseReducer';

describe ('Course Reducer', () => {
  it('should add course when passed CREATE_COURSE_SUCCESS',()=>{
    const initialState = [
      {id:'A',title:'A'},
      {id:'B',title:'B'},
      {id:'C',title:'C'}
    ];
    const course = {id:'B',title:'New Title'};
    const newCourse = {title:'D'};
    const action = actions.createCourseSuccess(newCourse);

    const newState = courseReducer(initialState,action);
    const updatedCourse = newState.find(a => a.id == course.id);
    const untouchedCourse = newState.find(a => a.id == 'A');

    expect(untouchedCourse.title).toEqual('A');
    expect(newState.length).toEqual(4);
    expect(newState[1].title).toEqual('B');
    //expect(updatedCourse.title).toEqual('New Title');
    /** to do
     * do a test for updates!
     */
  });
});
