import React from 'react';
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from 'enzyme-adapter-react-16';

import { findByTestAttr, checkProps } from "../test/testUtils";
import Congrats from "./Congrats";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props={}) => {
    return shallow(<Congrats {...props}/>)
}

it('should render without errors', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component).toHaveLength(1);
})

it('renders no text when `success` prop is false', () => {
    // be specific about what state props should be
    const wrapper = setup({ success: false });
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.text()).toBe('');

});

it('renders non-empty congrats message when `success` ', () => {
    const wrapper = setup({ success: true });
    const message = findByTestAttr(wrapper, 'congrats-message');
    expect(message.text().length).not.toBe(0);
})

it('does not throw warning with expected props', () => {
    const expectedProps = { success: false };
    // const propError = checkPropTypes(Congrats.propTypes, expectedProps, 'prop', Congrats.name)
    // // error will be undefined if the props pass all the tests
    // expect(propError).toBeUndefined();
    checkProps(Congrats, expectedProps);
})