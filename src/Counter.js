import React, { PropTypes } from 'react';

const propTypes = {
    start: PropTypes.number.isRequired,
    end: PropTypes.number.isRequired,
    done: PropTypes.func,
};

class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = { count: props.start };

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    componentWillMount() {
        this.setState({ count: this.props.start });

        if (this.props.start < this.props.end) {
            this.intervalId = setInterval(this.increment, 1000);
        } else {
            this.intervalId = setInterval(this.decrement, 1000);
        }
    }

    isDone() {
        if (this.state.count === this.props.end) {
            clearInterval(this.intervalId);
            if (this.props.done) {
                this.props.done();
            }
        }
    }

    increment() {
        this.setState({ count: this.state.count + 1 });
        this.isDone();
    }

    decrement() {
        this.setState({ count: this.state.count - 1 });
        this.isDone();
    }

    render() {
        return <span>{this.state.count}</span>;
    }
}

Counter.propTypes = propTypes;

export default Counter;
