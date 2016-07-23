import React from 'react';
import Component from '../src/Component'; // This is our component
import { storiesOf } from '@kadira/storybook';

storiesOf('Component', module)
    .add('with lyef name', () => (
        <Component name="lyef" />
    ))
    .add('with another name', () => (
        <Component name="another" />
    ))
