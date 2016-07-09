import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Foo from '../../src/Foo';

describe('Component Foo', () => {

    it('should have a class named foo', () => {
        const wrapper = shallow(<Foo />);
        expect(wrapper.is('.foo')).to.equal(true);
    });

    it('should have three children', () => {
        const wrapper = shallow(<Foo />);
        expect(wrapper.children()).to.have.length(3);
    });

    it('should have children with class named bar', () => {
        const wrapper = shallow(<Foo />);
        expect(wrapper.children().at(1).is('.bar')).to.equal(true);
    });
});
