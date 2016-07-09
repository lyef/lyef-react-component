import React from 'react';

const Foo = ({ itens }) => (
    <ul className="foo">
        {itens.map((item, index) => (
            <li className="bar" key={index}>{item}</li>
        ))}
    </ul>
);

Foo.propTypes = {
    itens: React.PropTypes.array.isRequired,
};

export default Foo;
