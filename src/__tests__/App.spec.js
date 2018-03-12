import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import App from '../components/App';

test('renders without crashing', () => {
  let notes = {collection:[]}
  let actions = {getNotes: jest.fn(), deleteNote: jest.fn()}
  const output = shallow(<App notes={notes} actions={actions}/>)
  expect(shallowToJson(output)).toMatchSnapshot()
})

test('calls getNotes on mount', () => {
  let notes = {collection:[]}
  let actions = {getNotes: jest.fn(), deleteNote: jest.fn()}
  const output = shallow(<App notes={notes} actions={actions}/>)
  
  expect(actions.getNotes.mock.calls.length).toBe(1)
})

test('create note button opens new note dialog', () => {
  let notes = {collection:[]}
  let actions = {getNotes: jest.fn(), deleteNote: jest.fn()}
  const output = shallow(<App notes={notes} actions={actions}/>)
  
  expect(output.state().createNote).toBeFalsy
  output.find('Button').simulate('click')
  expect(output.state().createNote).toBeTruthy
})

test('New note dialog dismiss button closes the dialog', () => {
  let notes = {collection:[]}
  let actions = {getNotes: jest.fn(), deleteNote: jest.fn()}
  const output = shallow(<App notes={notes} actions={actions}/>)
  
  // set the createNote state to true
  output.find('Button').simulate('click')
  expect(output.state().createNote).toBeTruthy

  output.find('NewNote').simulate('dismiss')
  expect(output.state().createNote).toBeFalsy
})