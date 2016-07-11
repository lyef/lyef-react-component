import React from 'react';
import Foo from '../src/Foo'; // This is our component
import { storiesOf } from '@kadira/storybook';

storiesOf('Foo', module)
  .add('with 1 item', () => (
    <Foo itens={[1]} />
  ))
  .add('with 3 itens', () => (
    <Foo itens={[1,2,3]} />
  ))
  .add('with text itens', () => (
    <Foo itens={['react', 'awesome']} />
  ))
