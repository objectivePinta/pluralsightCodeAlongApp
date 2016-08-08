import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import CourseForm from './CourseForm';
import {mount,shallow} from 'enzyme';

function setup(saving) {
  const props = {
    course:{},loading:saving,errors:{},onSave:()=>{},onChange:()=>{}
  };
  return shallow(<CourseForm {...props} />);
}

describe('CourseForm via Enzyme',()=>{
it('renders form and h1', ()=> {
  const wrapper = setup(false);
  expect(wrapper.find('form').length).toBe(1);
  expect(wrapper.find('h1').text()).toEqual('Manage Course');
});

it('checks button to have "Save" caption', ()=> {
  const wrapper = setup(false);
  expect(wrapper.find('input').props().value).toBe("Save");
});

it('checks button to have "Saving" caption', ()=> {
  const wrapper = setup(true);
  expect(wrapper.find('input').props().value).toBe("Saving..");
});});
