import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Component from '../../src/Main';

describe('Component Hello', () => {
   it('should have h1 to display the Hello', () => {
       const wrapper = shallow(<Component name='lyef' />);
       expect(wrapper.find('h1')).to.have.length(1);
   });

    it('should have props for name', () => {
        const wrapper = shallow(<Component name='lyef' />);
        expect(wrapper.props().name).to.be.defined;
    });

    it('should create a correct DOM structure', () => {
        const wrapper = shallow(<Component name='lyef' />);
        const componentMock = shallow(<h1>Hello lyef!</h1>);
        expect(wrapper.html()).to.be.equal(componentMock.html());
    });
});
