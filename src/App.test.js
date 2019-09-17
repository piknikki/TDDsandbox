import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props={}, state=null) => {

  const wrapper = shallow(<App {...props} />);

  if (state) wrapper.setState(state);
  return wrapper;
}

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}

it('renders without crashing', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app')

  expect(appComponent.length).toBe(1);
});

it('renders increment button', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'increment-button');
  expect(button.length).toBe(1);
});

it('renders decrement button', () => {
  const wrapper = setup();
  const buttonDown = findByTestAttr(wrapper, 'decrement-button');
  expect(buttonDown.length).toBe(1);
});

it('renders counter', () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.length).toBe(1);
});

it('counter starts at 0', () => {
  const wrapper = setup();
  const initialCounterState = wrapper.state('counter');  // set the initial state
  expect(initialCounterState).toBe(0);
});

it('clicking button increments counter display by 1', () => {
  const counter = 7;
  const wrapper = setup(null, { counter });

  // find button and simulate click
  const button = findByTestAttr(wrapper, 'increment-button');
  button.simulate('click')

  // find display and test value
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.text()).toContain(counter + 1);

})















