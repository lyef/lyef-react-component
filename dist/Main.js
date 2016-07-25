'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Component = function () {
    function Component(_ref) {
        var name = _ref.name;
        return _react2['default'].createElement(
            'h1',
            null,
            'Hello ',
            name,
            '!'
        );
    }

    return Component;
}();

Component.propTypes = {
    name: _react.PropTypes.string.isRequired
};

exports['default'] = Component;