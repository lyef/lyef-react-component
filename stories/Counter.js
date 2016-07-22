import React from 'react';
import Counter from '../src/Counter'; // This is our component
import { storiesOf, action } from '@kadira/storybook';

storiesOf('Counter', module)
    .add('with count down', () => (
        <Counter start={10} end={0} />
    ))
    .add('with normal counting', () => (
        <Counter start={0} end={10} />
    ))
    .add('with callback when done', () => (
        <Counter start={10} end={0} done={action('done')} />
    ))
