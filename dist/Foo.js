"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Foo = function () {
    function Foo(_ref) {
        var itens = _ref.itens;
        return _react2["default"].createElement(
            "ul",
            { className: "foo" },
            itens.map(function (item, index) {
                return _react2["default"].createElement(
                    "li",
                    { className: "bar", key: index },
                    item
                );
            })
        );
    }

    return Foo;
}();

Foo.propTypes = {
    itens: _react2["default"].PropTypes.array.isRequired
};

exports["default"] = Foo;