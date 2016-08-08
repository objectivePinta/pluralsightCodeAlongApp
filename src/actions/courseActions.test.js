import expect from 'expect';
import * as types from './actionTypes';
import * as courseActions from './courseActions';

describe('Course Actions', () => {
  describe('createCourseSuccess', () => {
    it('should do something', ()=> {
      const course = {id: 'clean-code', title: 'Clean Code'};
      const expectedAction = {
        type: types.CREATE_COURSE_SUCCESS,
        course: course
      };
      const action = courseActions.createCourseSuccess(course);

      expect(action).toEqual(expectedAction);
    });
  });
});
