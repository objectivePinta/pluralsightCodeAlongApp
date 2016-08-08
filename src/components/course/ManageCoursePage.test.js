import expect from 'expect';
import React from 'react';
import {ManageCoursePage} from './ManageCoursePage';
import {mount,shallow} from 'enzyme';


describe('Manage Course Page', ()=> {
  it('sets error message when trying to save empty title', ()=> {
    let props = {
      authors: [],
      course: {
        id: "",
        title: "",
        watchHref: "",
        authorId: "",
        length: "",
        category: ""
      }, actions: {
        saveCourse: ()=> {
          return Promise.resolve();
        }
      }
    };
    const wrapper = mount(<ManageCoursePage {...props} />);
    const saveButton = wrapper.find('input').last();
    expect(saveButton.prop('type')).toBe('submit');
    saveButton.simulate('click');
    expect(wrapper.state().errors.title).toBe("Title must be at least 5 characters");
  });
});
