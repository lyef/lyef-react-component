import React from 'react';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { shallow, mount } from 'enzyme';
import assertEqualJSX from 'assert-equal-jsx';
import Counter from '../../src/Counter';
chai.use(sinonChai);

describe('Component Counter', () => {

    beforeEach(() => {
        sinon.stub(global, 'setInterval').returns('interval-id');
        sinon.spy(global, 'clearInterval');
    });

    afterEach(() => {
        global.setInterval.restore();
        global.clearInterval.restore()
    });

    it('should have props start and end', () => {
        const wrapper = shallow(<Counter start={0} end={10} done={() => 'test'} />);
        expect(wrapper.props().start).to.be.defined;
        expect(wrapper.props().end).to.be.defined;
        expect(wrapper.props().done).to.be.defined;
    });

    it('should call setInterval with increment function and 1000ms', () => {
        const wrapper = mount(<Counter start={0} end={1} />);
        const instance = wrapper.instance();

        expect(setInterval).to.have.been.calledWith(instance.increment, 1000);
    });

    it('should call setInterval with decrement function and 1000ms', () => {
        const wrapper = mount(<Counter start={1} end={0} />);
        const instance = wrapper.instance();

        expect(setInterval).to.have.been.calledWith(instance.decrement, 1000);
    });

    describe('#increment', () => {
        let wrapper, instance;

        beforeEach(() => {
            wrapper = mount(<Counter start={0} end={3} />);
            instance = wrapper.instance()
            sinon.spy(instance, 'isDone');
        });

        it('should increment count state', () => {
            instance.increment();
            expect(wrapper.state().count).to.equal(1);
        });

        it('should call isDone', () => {
            instance.increment();
            expect(instance.isDone).to.have.been.called;
        });
    });

    describe('#decrement', () => {
        let wrapper, instance;

        beforeEach(() => {
            wrapper = mount(<Counter start={3} end={0} />);
            instance = wrapper.instance()
            sinon.spy(instance, 'isDone');
        });

        it('should decrement count state', () => {
            instance.decrement();
            expect(wrapper.state().count).to.equal(2);
        });

        it('should call isDone', () => {
            instance.decrement();
            expect(instance.isDone).to.have.been.called;
        });
    });

    describe('#isDone', () => {
        let doneCallback, wrapper;

        beforeEach(() => {
            doneCallback = sinon.spy();
            wrapper = mount(<Counter start={0} end={3} done={doneCallback} />);
        });

        context('when count equals end', () => {
            it('should call doneCallback', () => {
                wrapper.instance().increment();
                wrapper.instance().increment();
                wrapper.instance().increment();

                expect(doneCallback).to.have.been.called;
            });

            it('should call clearInterval with intervalId', () => {
                wrapper.instance().increment();
                wrapper.instance().increment();
                wrapper.instance().increment();

                expect(clearInterval).to.have.been.calledWith('interval-id');
            });
        });

        context('when count differs end', () => {
            it('should not call doneCallback', () => {
                expect(doneCallback).to.not.have.been.called;
            });

            it('should not call clearInterval with intervalId', () => {
                expect(clearInterval).to.not.have.been.calledWith('interval-id');
            });
        });
    });

    it('should create a correct DOM structure', () => {
        const doneCallback = () => 'does something';
        const componentMock = (
            <span>0</span>
        );
        assertEqualJSX(<Counter start={0} end={0} done={doneCallback} />, componentMock);
    });
});
