'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
    start: _react.PropTypes.number.isRequired,
    end: _react.PropTypes.number.isRequired,
    done: _react.PropTypes.func
};

var Counter = function (_React$Component) {
    _inherits(Counter, _React$Component);

    function Counter(props) {
        _classCallCheck(this, Counter);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Counter).call(this, props));

        _this.state = { count: props.start };

        _this.increment = _this.increment.bind(_this);
        _this.decrement = _this.decrement.bind(_this);
        return _this;
    }

    _createClass(Counter, [{
        key: 'componentWillMount',
        value: function () {
            function componentWillMount() {
                this.setState({ count: this.props.start });

                if (this.props.start < this.props.end) {
                    this.intervalId = setInterval(this.increment, 1000);
                } else {
                    this.intervalId = setInterval(this.decrement, 1000);
                }
            }

            return componentWillMount;
        }()
    }, {
        key: 'isDone',
        value: function () {
            function isDone() {
                if (this.state.count === this.props.end) {
                    clearInterval(this.intervalId);
                    if (this.props.done) {
                        this.props.done();
                    }
                }
            }

            return isDone;
        }()
    }, {
        key: 'increment',
        value: function () {
            function increment() {
                this.setState({ count: this.state.count + 1 });
                this.isDone();
            }

            return increment;
        }()
    }, {
        key: 'decrement',
        value: function () {
            function decrement() {
                this.setState({ count: this.state.count - 1 });
                this.isDone();
            }

            return decrement;
        }()
    }, {
        key: 'render',
        value: function () {
            function render() {
                return _react2['default'].createElement(
                    'span',
                    null,
                    this.state.count
                );
            }

            return render;
        }()
    }]);

    return Counter;
}(_react2['default'].Component);

Counter.propTypes = propTypes;

exports['default'] = Counter;